import React, {useEffect} from 'react'
import Header from '../imports/Header';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function Home() {

    const user = useSelector(state=>state.isLoggedIn)
    const history = useHistory();

    const route = ()=>{
        const token = localStorage.getItem('x-access-token')
        return token ? true: false
    }

    useEffect(()=>{
        if(!route){
            history.push('/login')
        }
    },[route.history])

    console.log(user);


    return ( //Kun Wrapper Itti NU Garagara (<>     ....    </>)  Inni Kun Jechadha
        <> 
            <Header></Header>
            <main>
            <div className="container">
                <h4>Welcome to Home Page Faniman</h4>
            </div>
            </main>
          
        </>
    )
}
