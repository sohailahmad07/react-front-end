import React, {useEffect, useState} from "react";
import API_BASE_URL from "../apiConfig";
import {Table, Image} from "antd";
const UsersTable = function () {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}api/users`) // Adjust the URL to match your Laravel API endpoint
            .then(response => response.json())
            .then(resultData => {setData(resultData)})
            .catch(error => console.error(error));
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'feature_img_url',
            key: 'feature_img_url',
            render:(imagePath) => (
                <Image src={imagePath} alt={"userImage"} width="50px" height="50px"/>
            )
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        }
    ];

    return (
            <Table dataSource={data} columns={columns} rowKey={Math.random} />
    )
}
export default UsersTable;
