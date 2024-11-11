import React from 'react'
import styles from '../Styles/Dash.module.css';
const Dashboard2 = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.topNav}>
  
            <input type="text" placeholder="Search here..." />
            <div className={styles.userInfo}>Johnathan Doe</div>
        </div>
        <div className={styles.DashboardMain}>
            <h1>Dashboard</h1>
                <div className={styles.innerDash}>
                    <div className={styles.div1}>
                        <div className={styles.data}>

                      
                        <div>
                            <p>Fans</p>
                            <h3>27</h3>
                            <p>Power Consumption</p>
                            <h3>270</h3>
                        </div>
                        <div>
                            <p>Light</p>
                            <h3>65</h3>
                            <p>Power Consumption</p>
                            <h3>876</h3>
                        </div>
                        <div>
                            <p>Refrigerator</p>
                            <h3>4</h3>
                            <p>Power Consumption</p>
                            <h3>0</h3>
                        </div>
                        <div>
                            <p>Air Conditioner</p>
                            <h3>852</h3>
                            <p>Power Consumption</p>
                            <h3>65</h3>
                        </div>
                    </div>   
                        <div className={styles.PowerConsumptio}>
                            
                        </div> 
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.circleData}>
                            <h3>Consumption</h3>
                            <p>1200</p>
                            <p>Power Consumption</p>
                            <p>1200</p>
                        </div>
                        <div className={styles.graph}>
                            
                        </div>
                    </div>
            <div>

            </div>
        </div>
              
        </div>
           
      </div> 
    </>
  )
}

export default Dashboard2
