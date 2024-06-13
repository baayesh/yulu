import React from 'react';
import S1Img from '../../assets/home/Our Services/S1.png';
import S2Img from '../../assets/home/Our Services/S2.png';
import S3Img from '../../assets/home/Our Services/S3.png';

const OurServices = () => {
  return (
    <section>
        <div className="column container our__services__container">
            <h2 className='tag__1'>Our Services</h2>
            <h4 className='subheading__2'>Our Best Services for You</h4>
            <div className="row our__services__cards">
                <div className="column our__services__card">
                    <img src={S1Img} alt="" />

                    <h3 className='subheading__3'>Service Name</h3>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus praesentium, commodi odit dignissimos exercitationem velit. Suscipit labore enim alias, sunt porro debitis et iure quae corporis non asperiores laboriosam quo reprehenderit inventore itaque amet explicabo. Qui doloribus vel possimus </p>
                    
         
                </div>
                <div className="column our__services__card">
                <img src={S2Img} alt="" />
                <h3 className='subheading__3'>Service Name</h3>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus praesentium, commodi odit dignissimos exercitationem velit. Suscipit labore enim alias, sunt porro debitis et iure quae corporis non asperiores laboriosam quo reprehenderit inventore itaque amet explicabo. Qui doloribus vel possimus </p>
                
                </div>
                <div className="column our__services__card">
                <img src={S3Img} alt="" />
                <h3 className='subheading__3'>Service Name</h3>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus praesentium, commodi odit dignissimos exercitationem velit. Suscipit labore enim alias, sunt porro debitis et iure quae corporis non asperiores laboriosam quo reprehenderit inventore itaque amet explicabo. Qui doloribus vel possimus </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices