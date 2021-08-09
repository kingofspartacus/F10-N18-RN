import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
const NAMESPACE = 'Sample controller';
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Sample check');
    return res.status(200).json([
        {
            categoryId: 1,
            title: 'TShirt',
            url: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/4/20/xxmeofficial1756897801413789146215604407732069441351738n-1618895602090587322263.jpg',
            dataMenu: [
                {
                    id: 1,
                    title: 'Tshirt',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://cf.shopee.vn/file/ca6cd2e6b2921a89b53b4b201ede2473_tn',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 199000
                },
                {
                    id: 2,
                    title: 'Tshirt',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'http://theme.hstatic.net/200000159059/1000614589/14/share_fb_home.png?v=117',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 209000
                },
                {
                    id: 3,
                    title: 'Tshirt',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://media3.scdn.vn/img4/2020/07_08/1jnXz0DsSsbSy5118jfr.jpg',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 4,
                    title: 'Tshirt TSUN',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://bizweb.dktcdn.net/100/348/395/articles/img-2519-1-min.jpg?v=1604080834357',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 5,
                    title: 'Tshirt Davies',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://bizweb.dktcdn.net/100/287/440/files/ao-thun-nu-form-rong-gia-re.jpg?v=1609823309210',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 6,
                    title: 'Tshirt BBDC',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://cf.shopee.vn/file/92640df46a355b32031a5ee5181c5b24',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 7,
                    title: 'Tshirt Bagic',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://static.dosi-in.com/images/sukien/27/DSCF8048.jpg',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 8,
                    title: 'Tshirt MAYER',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://static.dosi-in.com/images/sukien/24/0A41D2B2-D328-4DDD-A67C-53C9ACB5DC83.jpg',
                    type: 'Mùa hè',
                    shop: 'SADBOYS',
                    price: 250000
                }
            ]
        },
        {
            categoryId: 2,
            title: 'Hoodie',
            url: 'https://images-na.ssl-images-amazon.com/images/I/71G9Hu4jXBL._SL1500_.jpg',
            dataMenu: [
                {
                    id: 1,
                    title: 'Hoodie',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://localbrand.vn/wp-content/uploads/2021/06/sad-boiz-aint-cry-5.jpg',
                    type: 'Mùa đông',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 2,
                    title: 'Hoodie',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQ5gvC3MM8i3IWFiw_ZF1ln9p2Lms5LuCpT1YEAXqnfNhi-hewWyt8J7XTb5bpoWHV8M&usqp=CAU',
                    type: 'Mùa đông',
                    shop: 'SADBOYS',
                    price: 250000
                },
                {
                    id: 3,
                    title: 'Hoodie',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://product.hstatic.net/200000159059/product/109792839_3093762574026608_9053821329387390614_o_b8f0e028dddf42fcad6d69d561dacf5a.jpg',
                    type: 'Mùa đông',
                    shop: 'SADBOYS',
                    price: 250000
                }
            ]
        },
        {
            categoryId: 3,
            title: 'Jacket',
            url: 'http://bizweb.dktcdn.net/100/287/440/files/ao-khoac-bomber-bong-chay-dep-15bf1235-f9a1-4c31-846f-e9b894d02df2.jpg?v=1617610618867',
            dataMenu: [
                {
                    id: 1,
                    title: 'Jacket',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://localbrand.vn/wp-content/uploads/2020/04/jacket-freakers-local-brand-viet-nam-streetwear.jpg',
                    type: 'Mùa đông',
                    shop: 'SADBOYS',
                    price: 450000
                },
                {
                    id: 2,
                    title: 'Jacket',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYk2VyDcmY6y4ADfWIFNlfpqoGISnETLNRoXAl8qXfrJX4PhkWC7FTBIeeGZkFaD2khqFL2E&usqp=CAc',
                    type: 'Mùa đông',
                    shop: 'SADBOYS',
                    price: 450000
                },
                {
                    id: 3,
                    title: 'Jacket',
                    subtitle: [
                        {
                            id: 1,
                            subtitle1: 'FreeShip',
                            subtitle2: 'Đồng giá 199k'
                        }
                    ],
                    sold: 120,
                    liked: 7,
                    url: 'https://localbrand.vn/wp-content/uploads/2020/04/jacket-bad-habits-local-brand-viet-nam.2.jpg',
                    type: 'Mùa đông',
                    shop: 'SADBOYS',
                    price: 450000
                }
            ]
        }
    ]);
};

export default { serverHealthCheck };
