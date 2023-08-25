import React,{useState,useEffect,useContext,createContext} from 'react'
import axios from "axios"
import { useAddress, useContract,useMetamask, useDisconnect, useSigner} from "@thirdweb-dev/react";
import {ethers} from "ethers";

const StateContext = createContext();

export const StateContextProvider=({ children })=>{
    const { contract } = useContract("0x6746BeC430354F66e2eA74ee9d7a36bf83E2555E");
    
 
    const address = useAddress();
    const connect =useMetamask();

    //Frontend function
    const disconnect=useDisconnect();
    const signer=useSigner();
    const [userBlance, setUserBlance]=useState();
    const [loading,setLoading] =useState(false);

    const fetchData=async ()=>{
        try {
            const balance=await signer?.getBalance();
            const userBalance=address
            ? ethers.utils.formatEther(balance?.toString())
            :"";
            setUserBlance(userBalance);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchData();
    },[]);

    //contract function
    //---upload
    const uploadImage= async (imageInfo)=>{
        const {title,description, email,category, image}=imageInfo;
        try {
            //charge
            const listingPrice=await contract.call("listingPrice");

            const createNFTs= await contract.call("uploadIPFS",
            [address, image, title, description,email,category],
            
            {
                value:listingPrice.toString(),
            });

            //api call
            const response= await axios({
                method:"POST",
                url:`/api/v1/NFTs`,
                data:{
                    title:title,
                    description:description,
                    category: category,
                    image:image,
                    address:address,
                    email:email,
                },
            })
            console.log(response);
            console.info("contract call success", createNFTs);
            setLoading(false);
            window.location.reload();
        } catch (error) {
            console.error("contract call failure",error);
        }

    };

    //---get contract data
    const getUploadedImages = async()=>{
        //all images
        const images= await contract.call("getAllNFTs");

        //total uploads 
        const totalUpload = await contract.call("imagesCount");
        //listing price
        const listingPrice = await contract.call("listingPrice");
        const allImages=images.map((images,i)=>({
            owner: images.creator,
            title: images.title,
            description: images.description,
            email: images.email,
            category: images.category,
            fundraised: images.fundraised,
            image: images.image,
            imageID: images.id.toNumber(),
            createdAt: images.timestamp.toNumber(),
            listedAmount: ethers.utils.formatEther(listingPrice.toString()),
            totalUpload: totalUpload.toNumber(),

        }));
        return allImages;

    };

    //--get single image

    const singleImage= async (id)=>{
        try{
            const data= await contract.call("getimage",[id]);

            const image={
                title:data[0],
                description: data[1],
                email: data[2],
                category: data[3],
                fundRaised: ethers.utils.formatEther(data[4].toString()),
                creator: data[5],
                imageURL: data[6],
                createdAt: data[7].toNumber(),
                imageId: data[8].toNumber(),
            };

            return image;
        }catch(err){
            console.log(err);
        }
    };

    //donate
    const donateFund= async ({amount, Id})=>{
        try{
            console.log(amount, Id);
            const transaction = await contract.call("donateToImage",[Id],{
                value: amount.toString(),
            });
            console.log(transaction);
            window.location.reload();
        }catch(error){
            console.log("error message",error.message);
            alert(`Error:${error}`)
        }
    };

    //get api data
    const getAllNftsAPI= async()=>{
        const response= await axios({
            method:"GET",
            url: "/api/v1/NFTs",
        });
        console.log(response);
    };
    //single nft api
    const getSingleNftsAPI = async (id)=>{
        const response= await axios({
            method:"GET",
            url:`/api/v1/NFTs${id}`,
        });
        console.log(response);
    };

    return (<StateContext.Provider 
           value={{address,
                   contract,
                   connect,
                   disconnect,
                   userBlance,
                   setLoading,
                   loading,
                   //function
                   uploadImage,
                   getUploadedImages,
                   donateFund,
                   singleImage,
                   //api
                   getAllNftsAPI,
                   getSingleNftsAPI,

                }}>
                    {children}
                </StateContext.Provider>
            );
};

export const useStateContext = () => useContext(StateContext);