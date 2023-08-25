import React from 'react'
//internal component
import {Logo,Button,Card,Footer,CheckBox,Filter,Donate
    ,Form,Notification,Profile,Login,Header,SignUp,Upload,Product} from '../Components'

const layout = () => {
  return (
    <div className='home'>
        <Product/>
        <Upload/>
        <SignUp/>
        <Header/>
        <Logo/>
        <Notification/>
        <Login/>
        <Profile/>
        <Button/>
        <Donate/>
        <Form/>
        <Card/>
        <Footer/>
        <CheckBox/>
        {/*<Filter/> */}

    </div>
  )
}

export default layout