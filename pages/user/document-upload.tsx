import React, { useEffect, useState } from "react"
import Layout from "../../components/Common/Layout"
import { InboxOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { Auth } from "aws-amplify";
import { addArt } from "../../services/roster/art/Art";

const { Dragger } = Upload;


const DocumentUpload = () => {
    const [file, setFile] = useState<File>()
    const [employeeid, setEmployeeid] = useState("")

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            setEmployeeid(user.username)
        })
    }, [])

    const addArtLahSial = async () => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            addArt(jwt, employeeid, file as File)
            message.success("Photo uploaded successfully")
        })
    }

    const props = {
        name: 'file',
        multiple: true,
        onChange(info: any) {            
            const { status } = info.file;
            if (status === 'done') {
                setFile(info.file.originFileObj)                
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Layout header="Test Upload">
            <div>
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
            </div>
            <button className="w-full py-2 bg-blue-500 rounded-md mt-6 text-white"
            onClick={ () => {
                addArtLahSial()
            }}>
                Submit
            </button>
        </Layout>
    )
}

export default DocumentUpload