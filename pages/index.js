import React,{useState,useEffect,useRef} from "react";
import Image from "next/image";
import axios from "axios";
import Style from "../Components/Front/Front.module.css";
import BTNStyle from "../Components/Button/Button.module.css";
import wallet from "../Components/images/Group_4.png";
import group_1 from "../Components/images/Group_1.png";
import group_2 from "../Components/images/Group_2.png";
import group_3 from "../Components/images/Group_3.png";
import back from "../Components/images/back.png"
//internal import
import {
  Group,
  Card,
  Upload,
  Button,
  Profile,
  Header,
  Footer,
  Notification,
  Logo,
  Filter,
  Form,
  Front
} from "../Components";
import {useStateContext} from "../Context/NFTs";
import images from "../Components/Image/client/index";
import Link from "next/link";


const Home = () => {
 //state variable
  const {
    address,
    disconnect,
    contract,
    connect,
    userBlance,
    uploadImage,
    getUploadedImages,
    setLoading,
    loading,
    //api
    getAllNftsAPI,
  }=useStateContext();
  const [openProfile,setOpenProfile]=useState(false)
  const [closeForm,setCloseForm]=useState(true);
  const [file,setFile]=useState(null);
  const [display,setDisplay]=useState(null);
  const [notification,setNotification]=useState("");
  const [allImages,setAllImages]=useState([]);
  const [activeSelect,setActiveSelect]=useState("Old Images");
  const [imagesCopy,setImagesCopy]=useState([]);

  //get data

  const oldImages=[];

  const aboutSection = useRef(null);
  const scrollTo = () => { window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth', })}
  
  const fetchImages= async()=>{
    const images=await getUploadedImages();
    setAllImages(images);

    //api nfts
    const apiImages= await getAllNftsAPI();
  };
  useEffect(()=>{
    if(contract) fetchImages();
  },[address,contract]);

  if(allImages.length==-1){
    console.log("Loading");
  }else{
    allImages.map((el)=>oldImages.push(el));
  }

  //image data
  const [category, setCategory]= useState("");
  const [imageInfo, setImageInfo]=useState({
    title:"",
    description:"",
    email:"",
    category:"",
    image:"",
  });

  const handleFormFieldChange = (fieldName, e)=>{
    setImageInfo({...imageInfo, [fieldName]: e.target.value});
  };

  //upload
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setCloseForm(false);
    setLoading(true);
    if(file){
      try{
        const formData= new FormData();
        formData.append("file",file);

        const response=await axios({
          method:"POST",
          url:"https://api.pinata.cloud/pinning/pinFileToIPFS",
          data:formData,
          headers:{
            pinata_api_key:`308714353ea42b5c7623`,
            pinata_secret_api_key:`f50a5e4abb8b12815bbde4500cac428afd8ca29976b38cb613574d9ab21ce364`,
            "Content-Type":"multipart/form-data",
          }
        });
        console.log(response.data.IpfsHash)
        const image= `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        await uploadImage({
          ...imageInfo,
          image: image,
          category: category,
        });
        setFile(null);
      }catch(error){
          console.log(error)
      }
    }
    setFile(null);
  };

  const retrieveFile=(e)=>{
    const data=e.target.files[0];

    const reader=new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend=()=>{
      setFile(e.target.files[0]);
    };
    e.preventDefault();
  };
  
  //take image
  const onImageChange= (event)=>{
    if(event.target.files && event.target.files[0]){
      setDisplay(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="home">
      <Header notification={notification} setNotification={setNotification} />
      <div className="Front">
      <div className={Style.front}>
        <div className={Style.front_img}>
              <div className={Style.img1}><img src={back.src} alt="" /></div>
        </div>
        <div className={Style.front_written}>
                <div className={Style.subheading}>
                    Trending NFT's<br/>
                    Hardworking Players
                </div>
                <div className={Style.detail_box}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab reiciendis similique eius! Aliquid ducimus voluptate,
                     excepturi ipsa sapiente distinctio enim perferendis corporis quae debitis tempora placeat quasi natus ullam. Suscipit?
                </div>

                <button className={BTNStyle.button} >
                    <span className={`${BTNStyle.button_content} ${Style.btn}` } onClick={scrollTo}>
                      Create my NFT
                    </span>
                </button>
        </div>
    </div>
    <div className={Style.follow_up} >

        <div className={Style.subheader}>
            How it works
        </div>
        <div className={Style.steps}>
            <div className={Style.step}>
                {console.log(wallet)}
                <img src={wallet.src} alt="wallet" />
                <div className={Style.detail_box1}>Create Your Account</div>
            </div>
            <div className={Style.step}>
                <img src={group_3.src} alt="wallet" />
                <div className={Style.detail_box1}>Create Your Collection</div>
            </div>
            <div className={Style.step}>
                <img src={group_2.src} alt="wallet" />
                <div className={Style.detail_box1}>Add your NFT's</div>
            </div>
            <div className={Style.step}>
                <img src={group_1.src} alt="wallet" />
                <div className={Style.detail_box1}>List them for sale</div>
            </div>
        </div>
    </div>
      </div>
      <div className="header">
          <h1>Create 1000 NFTs for Free</h1>
      </div>
      {/* upload */}
      <div className="upload" id="upload" ref={aboutSection}>
        <Upload
        onImageChange={onImageChange}
        display={display}
        address={address}
        retrieveFile={retrieveFile}
        />
        <div className="upload-info">
           <h1>Welcome to NFTs IPFS Upload</h1>
           <p>Our products help you securely distribute any type of media 
            active Select scale-freeing you from restrictive platforms, middleman,
            and algorithms that limit your creative agency.</p>
            <div className="avatar">
              <Button
              address={address}
              disconnect={disconnect}
              connect={connect}
              file={file}
              />

              {address && (
                <p>
                  <Image
                  className="avatar_img"
                  src={images.client1}
                  width={40}
                  height={40}
                  onClick={()=>setOpenProfile(true)}
                  />
                </p>
              )}
            </div>
        </div>
      </div>
      <h1 className="subheading">All NFTs of marketplace</h1>
      {/**card */}
      {allImages.length == 0?(
        <Logo/>
      ): allImages==undefined ?(
        <h1>No Images</h1>
      ):(
        <>
        <Filter
          setImagesCopy={setImagesCopy}
          imagesCopy={imagesCopy}
          setAllImages={setAllImages}
          allImages={allImages}
          oldImages={oldImages}
          activeSelect={activeSelect}
          setActiveSelect={setActiveSelect}
          />
          <div className="card">
            {allImages.map((image, i) => (
                <Card
                  key={i+1}
                  index={i}
                  image={image}
                  setNotification={setNotification}
                />))
            }
          </div>
        </>
      )}
      <Group/>
      <Footer/>

      {/**notification */}
      {notification != ""&&(
        <Notification
          notification={notification}
          setNotification={setNotification}
        />
      )}
      {/**profile */}
      {openProfile &&(
        <div className="profile" >
          <Profile
          setOpenProfile={setOpenProfile}
          userBlance={userBlance}
          address={address}
          />
        </div>
      )}
      {/**loader */}
      {loading && (
        <div className="loader">
          <Logo/>
        </div>
      )}
      {/**form */}
      {file && closeForm && (
        <div className="form">
          <div className="form_inner">
            <Form
            setFile={setFile}
            setDisplay={setDisplay}
            handleFormFieldChange={handleFormFieldChange}
            handleSubmit={handleSubmit}
            setCategory={setCategory}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
