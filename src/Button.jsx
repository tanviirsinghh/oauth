function Button({onClick}) {
    return (
        <>
       
            <button onClick={onClick}  style={{
                    
                    height:'50px',
                    width:'190px',
                    backgroundColor:'white'
                    

                }}>
                <h4 style={{
                    
                     
                    color:'black',
                    textAlign:'center'
                    

                }}>sign in with google</h4>
            </button>
          
        </>
    )
}


export default Button