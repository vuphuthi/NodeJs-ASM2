
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from "react"
import axios from 'axios';
import { remove } from '../api/product';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Giá Sản Phẩm',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Giảm Giá',
        dataIndex: 'original_price',
        key: 'original_price',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Ảnh',
        dataIndex: 'image',
        key: 'image',
    },

    {
        title: 'Action',
        key: 'action',
        render: (record) => {
            
            return (
                <Space size="middle">
                    <Button type="primary" danger onClick={() => console.log(record.key)}>Sửa</Button>
                    <Button type="primary" danger onClick={() => console.log(record.key)}>Xóa</Button>
                </Space>
            )

        },
    },
];

function ListProduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(" http://localhost:8080/api/product");
            console.log(data)
            setProducts(data.product.map((item: any) => {
                return {
                    key: item._id,
                    name: item.name,
                    price: item.price,
                    original_price: item.original_price,
                    description: item.description,
                    
                    image: <div><img src={item.image} className='w-[40%]' alt="" /></div>

                }
            }))

        })()
    }, [])
    return (
        <div className="">
            <Table columns={columns} dataSource={products} />
        </div>
    )
}

export default ListProduct
