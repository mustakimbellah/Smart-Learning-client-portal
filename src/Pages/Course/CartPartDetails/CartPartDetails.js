import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const CartPartDetails = () => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        image: {
            width: "20%",
            padding: 10
        },

        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{title}</Text>
                    <Text  >{details}</Text>
                </View>

            </Page>
        </Document>
    );

    const CartPartDetails = useLoaderData();

    const { title, details, image } = CartPartDetails;

    return (
        <div className="container my-3" style={{ "maxWidth": "900px" }} >

            <div className="mx-auto">
                <h2 className='text-success'>{title}</h2>
                <PDFDownloadLink document={<MyDoc />} fileName="detail.pdf"><button>Download pdf</button>
                </PDFDownloadLink>

                <img src={image} alt="" className='w-100' style={{ 'alignContent': 'center' }} />
                <p className='text-success fw-bolder'> {details}</p>
                <Link to={'/checkout'} className='btn btn-success' >Premium Access</Link>
            </div>
        </div>
    );
};

export default CartPartDetails;