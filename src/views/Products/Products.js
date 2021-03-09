import './Products.scss';
import Product from '../../components/Product/Product'
// import Request from '../../components/Request/Request'

function Products() {
    let autos = [
        {
            id: '0',
            imgSrc: 'https://cdnimg.rg.ru/img/content/168/29/51/34_d_850.jpg',
            title: 'Tesla Model X',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '1',
            imgSrc: 'https://autoua.net/media/uploads/mercedes/image-86eb89ac1517684023-1000x667.jpg',
            title: 'Mercedes-Benz',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '2',
            imgSrc: 'https://all-test-drives.com/wp-content/uploads/posts/2018-09/1536136347_image-b34e6dae1535560986-1000x667.jpg',
            title: 'Renault Arkana',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '3',
            imgSrc: 'https://ireland.apollo.olxcdn.com/v1/files/u4j6hsyz9btk2-UA/image;s=1000x667',
            title: 'ВАЗ',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '4',
            imgSrc: 'https://www.autosaratov.ru/obzor/wp-content/uploads/2020/08/xray-sochi-1-1000x667.jpg',
            title: 'Lada X-Ray',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '5',
            imgSrc: 'https://auto.vercity.ru/gallery/img/automobiles/RUS/Lada/1983%20VAZ-2108%20Sputnik%20Predserijnyj/dl/1527217913.jpg',
            title: 'ВАЗ-2108',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '6',
            imgSrc: 'data:image/jpeg;base64,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',
            title: 'Ford Focus 3',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '7',
            imgSrc: 'https://ireland.apollo.olxcdn.com/v1/files/r8aarismkvm71-UA/image;s=1000x667',
            title: 'ЗАЗ ',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        },
        {
            id: '8',
            imgSrc: 'https://ireland.apollo.olxcdn.com/v1/files/1fiddqcdcdtt2-UA/image;s=1000x667',
            title: 'Москвич',
            info: 'Lorem Ipsum is dolor sit amet.',
            price: '$80 000'
        }
    ]
    let autoItem = autos.map((auto :{id :string, imgSrc :string, title :string, info :string, price :string}, index :num) => {
        return <Product product={auto} key={index}/>
    })
    // let autoItemR = autos.map((auto :{id :string, imgSrc :string, title :string, info :string, price :string}, index :num) => {
    //     return <Request product={auto} key={index}/>
    // })
    return (
        <div className="Products">
            {autoItem}
        </div>
    );
}

export default Products;