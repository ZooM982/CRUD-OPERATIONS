import { useState, useEffect } from "react"
import img from '../Assets/image.jpg'

const Etudiant = () => {
        function useFetch (url) {
        
            const [state, setState] = useState({
                items : [],
                loading : true
            })
        
            useEffect(function () {
                (async function (){
                    const response = await fetch(url)
                    const responseData = await response.json()
        
                    if(response.ok){
                        setState({
                            items : responseData,
                            loading : false
                        })
                    }else {
                        alert(JSON.stringify(responseData))
                        setState(s => ({...s, loading: false}))
                    }
                })()
        
            }, [url])
            
            return [
                state.loading,
                state.items
            ]
        }

        const [loading, items] = useFetch('https://jsonplaceholder.typicode.com/users')
    
        if(loading){
            return 'Chargement.......'
        }
        
         document.getElementById('nombre').innerHTML = items.length
    
    return (
        <section id="etudiant">
            <div className="container">
                <div className="row">
                <div className="student-head d-flex justify-content-between">
                        <h2>Students List</h2>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" fill="none">
                            <g clip-path="url(#clip0_21_203)">
                                <path d="M12.6002 12.375H1.40023C0.157725 12.375 -0.472275 13.8574 0.411475 14.7211L6.01148 20.2211C6.55835 20.7582 7.44648 20.7582 7.99335 20.2211L13.5934 14.7211C14.4684 13.8574 13.8427 12.375 12.6002 12.375ZM7.00023 19.25L1.40023 13.75H12.6002L7.00023 19.25ZM1.40023 9.625H12.6002C13.8427 9.625 14.4727 8.14257 13.589 7.2789L7.98898 1.7789C7.4421 1.24179 6.55398 1.24179 6.0071 1.7789L0.4071 7.2789C-0.4679 8.14257 0.157725 9.625 1.40023 9.625ZM7.00023 2.74999L12.6002 8.24999H1.40023L7.00023 2.74999Z" fill="#FEAF00"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_21_203">
                                <rect width="14" height="22" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <button className="ms-5" >ADD SUTUDENT</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Adress</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => 
                            <tr key={item.id}>
                                <td><img src={img} alt="" /></td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td key={item.address} style={{fontSize: '10px'}}>
                                    Street: {item.address.street}<br/>
                                    Suite: {item.address.suite}<br/>
                                    City: {item.address.city}<br/>
                                    {/* Zipcode: {item.address.zipcode}<br/>
                                    Géo: <p key={item.address.geo}>
                                        lat: {item.address.geo.lat}<br/>
                                        lng: {item.address.geo.lng}
                                    </p> */}
                                </td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td key={item.company} style={{fontSize: '10px'}}>
                                    Name: {item.company.name},<br />
                                    Catch-prase: {item.company.catchPhrase},<br />
                                    BS: {item.company.bs}
                                </td>
                            </tr>
                            )}<br />
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
 
export default Etudiant;