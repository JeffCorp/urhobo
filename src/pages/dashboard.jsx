import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, Alert } from "reactstrap";
import Constants from "../constants/constants";
import Axios from "axios";


export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            title: "",
            composer: "",
            value: "",
            verses: [],
            uchb: 0,
            audio: "",
            category: "",
            display: false
        };
        this.fetchCategories = this.fetchCategories.bind(this);
        this.onVersesValueChanged = this.onVersesValueChanged.bind(this);
        this.onTitleValueChanged = this.onTitleValueChanged.bind(this);
        this.onComposerValueChanged = this.onComposerValueChanged.bind(this);
        this.onUchbValueChanged = this.onUchbValueChanged.bind(this);
        this.onCategoriesChanged = this.onCategoriesChanged.bind(this);
        this.sendToServer = this.sendToServer.bind(this);
    }

    onTitleValueChanged(e){
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }

    onComposerValueChanged(e){
        console.log(e.target.value);
        this.setState({
            composer: e.target.value
        });
    }

    onUchbValueChanged(e){
        console.log(e.target.value);
        this.setState({
            uchb: e.target.value
        });
    }

    onVersesValueChanged(e){
        let arr = [];
        arr.push(e.target.value);
        this.setState({
            verses : arr
        }, () => {
            console.log(this.state.verses);
        });
    }

    onCategoriesChanged(e){
        console.log(e.target.value);
        this.setState({
            category: e.target.value
        })
    }

    fetchCategories() {
        var myHeaders = new Headers();
        myHeaders.append("X-Parse-Application-Id", "wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb");
        myHeaders.append("X-Parse-REST-API-Key", "qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr");

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://parseapi.back4app.com/classes/category", requestOptions)
            .then(response => response.text())
            .then(result => {
                let results = JSON.parse(result);
                this.setState({
                    categories: results.results
                }, () => {
                    console.log(this.state.categories)
                })
            })
            .catch(error => console.log('error', error)
        );
    }

    sendToServer(){

        let headers = {
            "X-Parse-Application-Id": "wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb",
            "X-Parse-REST-API-Key": "qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"
        };

        console.log(this.state.verses);

        Axios.post("https://parseapi.back4app.com/classes/library",
                {
                    "verses": this.state.verses,
                    "title": this.state.title,
                    "category": this.state.category,
                    "composer": this.state.composer,
                    "uchb": this.state.uchb,
                    "audio": this.state.audio
                },
                {
                    headers: headers
                }                
        ).then((response) => {
            if(response){
                this.setState({
                    display: true,
                    verses: [],
                    title: "",
                    category: "",
                    composer: "",
                    uchb: "",
                    audio: ""
                });
            }
        })
    }

    componentDidMount() {
        this.fetchCategories();
    }

    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col md={4} style={{ backgroundColor: "#e222e2", height: "100vh" }}>
                        <div className="p-4" style={{ color: "white", fontWeight: "bolder", fontSize: "2em" }}>
                            Urhobo Catholic Hymnal
                        </div>
                        <div style={{ width: "100%", marginTop: "200px" }}>
                            <div>
                                <Button style={{ width: "100%" }} >
                                    Hymns
                                </Button>
                            </div>
                            <div>
                                Categories
                            </div>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div>
                            <div className="p-4" style={{ height: "60px", textAlign: "left", fontSize: "1.5em" }}>
                                Hymns
                            </div>
                            {
                                this.state.display &&
                                <Alert className="success">
                                    Data uploaded successfully to the server
                                </Alert>
                            }
                            <Form style={{ marginTop: "50px" }}>
                                <FormGroup>
                                    <Input type="text" name="email" id="title" placeholder="Song Title" value={this.state.title} onChange={this.onTitleValueChanged} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="email" id="composer" placeholder="Composer" value={this.state.composer} onChange={this.onComposerValueChanged} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="number" name="email" id="uchb" placeholder="UCHB number" value={this.state.uchb} onChange={this.onUchbValueChanged} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="select" name="select" id="exampleSelect" onChange={this.onCategoriesChanged}>
                                        <option value="">Choose category</option>
                                        {
                                            this.state.categories.map((e) => {
                                                return <option value={e.objectId} > {e.category} </option>
                                            })
                                        }
                                    </Input>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <Input type="textarea" name="text" id="text" placeholder="Verses" value={this.state.verses} onChange={this.onVersesValueChanged} />
                                    </Col>
                                </FormGroup>
                                <Button onClick={this.sendToServer}>Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}