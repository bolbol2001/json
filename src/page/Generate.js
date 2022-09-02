import React, { useState, useRef, Component } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';

import { QrReader } from 'react-qr-reader';

function Generate() {
    const data = {
        "form": {
            "section": [
                {
                    "order": 1,
                    "section_titlle": "Json_form:",
                    "fields": [
                        {
                            "name": "first_name",
                            "label": "First_name",
                            "required": true,
                            "data_type": "integer",
                            "html_element": "textbox"

                        },
                        {
                            "name": "last_name",
                            "label": "Last_name",
                            "required": true,
                            "data_type": "integer",
                            "html_element": "textbox"

                        },
                        {
                            "name": "order_id",
                            "label": "Order_id",
                            "required": true,
                            "data_type": "number",
                            "html_element": "number"

                        }
                    ]
                }
            ]
        }
    }

    const [firstname, setfirst] = useState('');
    const [lastname, setlast] = useState('');
    const [id, setid] = useState('');
    const verif = (x, label) => {
        if (label == "First_name") {
            setfirst(x);
        }
        else if (label == "Last_name") {
            setlast(x);
        }
        else if (label == "Order_id") {
            setid(x);
        }

    }



    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');

    const classes = useStyles();
    const qrRef = useRef(null);


    const generateQrCode = async () => {
        var text = "First_name:" + firstname + "\nLast_name:" + lastname + "\nid:" + id;
        const textjson = {
            firstname: firstname,
            lastname: lastname,
            id: id,

        }
        try {
            const response = await QRCode.toDataURL(JSON.stringify(textjson));
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }

    }

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }


    return (

        <Container className={classes.conatiner}>
            <Card>

                <h2 className={classes.title}>Generate & Download QR-Code</h2>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <form className="form_outer">{data.form.section.map(FormData => {

                                return (
                                    <div>
                                        <h1>{FormData.section_titlle}</h1>
                                        {
                                            FormData.fields.map(inputData => {
                                                return (
                                                    <div>
                                                        <label> {inputData.label} </label>
                                                        <input type={inputData.html_element} name={inputData.name} required={inputData.required} data_type={inputData.data_type} onChange={(e) => verif(e.target.value, inputData.label)} />

                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                )

                            })

                            }
                                <Button className={classes.btn} variant="contained"
                                    color="primary" onClick={() => generateQrCode()} >generate-Qr-Code</Button>

                            </form>



                            <br />
                            <br />
                            <br />
                            {imageUrl ? (
                                <img src={imageUrl} alt="img" />
                            ) : null}
                            <br />
                            <br />
                            <br />
                            <Button className={classes.btn} variant="contained"
                                color="secondary" onClick href={imageUrl} download img src={imageUrl} alt="img">Download-Qr-code</Button>


                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container >

    );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#3f51b5',
        color: '#fff',
        padding: 20
    },
    btn: {
        marginTop: 10,
        marginBottom: 20
    }
}));
export default Generate;