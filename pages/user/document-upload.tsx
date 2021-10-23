import React, { useState } from "react"
import Layout from "../../components/Common/Layout"
import { InboxOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';

const { Dragger } = Upload;


const DocumentUpload = () => {
    const [file, setFile] = useState<File>()
    const props = {
        name: 'file',
        multiple: true,
        onChange(info: any) {
            console.log(info);
            
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                setFile(info.file.originFileObj)
                console.log(info.file.originFileObj);
                
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e: any) {
            console.log(e);
            
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Layout header="Test Upload">
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
    </p>
            </Dragger>
        </Layout>
    )
}

export default DocumentUpload