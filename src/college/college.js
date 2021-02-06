import React from 'react';
import './college.css'
import clgImg from '../assets/college_01.jpg';
import clgImg2 from '../assets/college_02.jpg'


function College(props) {
    console.log(props.colleges[0].nearest_place.length);
    let imgStyle = {
        opacity: '0.5',
        width: '100%',
        height:'300px'
    }
    return (
        <div>
            <div className='gridView'>
                {
                    props.colleges.map(college => {
                        return (
                            <div key={college.id} className='card'>
                                <div style={{position:'relative',height:'300px'}}>
                                    <img src={college.id % 2 === 0 ? clgImg : clgImg2} alt="college" style={imgStyle} />
                                    <div className="promotePosition">
                                        {
                                            college.promoted === true ? <div className="promotedText">
                                                <p style={{margin:'0px',color:'#fff',fontWeight:'bold'}}>PROMOTED</p>
                                            </div> : ''
                                        }
                                        

                                        
                                    </div>
                                    <div className="ratingPosition">
                                        <div style={{border:'1px solid #ffeb00',backgroundColor:'#ffeb00',borderRadius:'4px',padding:'3px'}}>
                                            <p style={{color:'#fff',fontWeight:'bold',textAlign:'center',margin:'1px'}}><span style={{fontSize:'35px'}}>{college.rating}</span><span>/ 5</span></p>
                                            <p style={{color:'#fff',fontWeight:'bold',margin:'1px'}}>{college.rating_remarks}</p>
                                        </div>
                                    </div>
                                    <div className="tagPlacing">
                                        {
                                            college.tags.map((tagtext,index) => {
                                                return(
                                                    <span key={index} className="tag">{tagtext}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="rankingPosition">
                                        <p className="rankingText">#{college.ranking}</p>
                                    </div>
                                    
                                </div>
                                <div style={{ paddingBottom: '10px' }}>
                                    <div>
                                        <div className="gridViewContent">
                                            <div>
                                                <div className="container">
                                                    <h4 className="headingText">{college.college_name}</h4>
                                                    {
                                                        college.nearest_place.map((place, index) => {
                                                            return (
                                                                <span key={index} className='placeText' style={index === 0 ? { color: '#000' } : { color: '#a7a1a1' }}>{place}<span>{index % 2 === 0 ? ' | ' : ''}</span></span>
                                                            )
                                                        })
                                                    }
                                                    <p className="matchText"><span style={{ color: '#31ce31' }}><strong>93% Match:</strong></span> {college.famous_nearest_places}</p>
                                                </div>
                                                <div style={{border:'1px solid #a1e6ec',borderTopRightRadius:'40px',borderBottomRightRadius:'40px',backgroundColor:'#a1e6ec',width:'85%'}}>
                                                    <p className="offertxt" style={{paddingLeft:'8px',paddingRight:'8px'}}>{college.offertext}</p>
                                                </div>
                                            </div>
                                            <div className='container' style={{textAlign:'right'}}>
                                                <p>
                                                    <span className="originalPrice"><span style={{ textDecoration: 'line-through' }}>₹ {college.original_fees}</span></span>
                                                <span className="discountText">{college.discount}%</span>
                                                </p>
                                                <p className="discountedPrice">₹ {college.discounted_fees} <br /><span className="semesterText">{college.fees_cycle}</span></p>
                                                <div>
                                                    {
                                                        college.amenties.map((amenty,index) => {
                                                            return(
                                                            <span key={index} className="amentyText">{amenty}<br></br></span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default College;