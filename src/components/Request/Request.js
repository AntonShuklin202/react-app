// import React from 'react'
// import './Request.scss'

// class Request extends React.Component {
//     constructor(props){
//         super(props)
//         let { product } = this.props
//         this.state = {
//             imgSrc: product.imgSrc,
//             isPayed: false,
//             inWorking: true
//         }
//     }
//     render(){
//         return(
//             <div className="Request">
//                 <div className="Request__status">{this.state.isPayed ? 'Оплачено' : 'В обработке'}</div>
//                 <div className="Request__img">
//                     <img src={this.state.imgSrc} alt=""/>
//                 </div>
//                 <div className="Request__about">
//                     <div className="Request__about--title"></div>
//                     <div className="Request__about--info"></div>
//                     <div className="Request__about--price"></div>
//                 </div>
//                 <button className="Request__btn"></button>
//                 <button className="Request__btn"></button>
//             </div>
//         )
//     }
// }

// export default Request;