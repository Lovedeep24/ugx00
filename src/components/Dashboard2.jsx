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
                            <h3>Average Power Consumption</h3>
                        </div> 
                    </div>
                    <div className={styles.div2}>
                        <div className={styles.circleData}>
                            <h3>Power Consumption</h3>
                        </div>
                        <div className={styles.graph}>
                            <h3>Current Power Consumption(Kw/H)</h3>
                            <h1>1633.00</h1>
                            <div className={styles.graphimg}>

                            </div>
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
