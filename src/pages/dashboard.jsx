import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, Alert, Table } from "reactstrap";
import Constants from "../constants/constants";
import _ from "lodash";
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
            display: false,
            _display: false,
            cat: true,
            btn1: true,
            btn2: false,
            catName: "",
            catDesc: "",
            shortCode: "",
            fetched: [],
            inputList: [
                {
                    verse: "",
                }
            ]
        };
        this.fetchCategories = this.fetchCategories.bind(this);
        this.onVersesValueChanged = this.onVersesValueChanged.bind(this);
        this.onTitleValueChanged = this.onTitleValueChanged.bind(this);
        this.onComposerValueChanged = this.onComposerValueChanged.bind(this);
        this.onUchbValueChanged = this.onUchbValueChanged.bind(this);
        this.onCategoriesChanged = this.onCategoriesChanged.bind(this);
        this.sendToServer = this.sendToServer.bind(this);
        this.onCatNameChanged = this.onCatNameChanged.bind(this);
        this.onCatDescChanged = this.onCatDescChanged.bind(this);
        this.onShortCodeChanged = this.onShortCodeChanged.bind(this);
        this.sendToCatServer = this.sendToCatServer.bind(this);
        this.fetchLibrary = this.fetchLibrary.bind(this);
        this.getCategoryNameFromId = this.getCategoryNameFromId.bind(this);
        this.onChanged = this.onChanged.bind(this);
    }

    onTitleValueChanged(e) {
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }

    onComposerValueChanged(e) {
        console.log(e.target.value);
        this.setState({
            composer: e.target.value
        });
    }

    onUchbValueChanged(e) {
        console.log(e.target.value);
        this.setState({
            uchb: e.target.value
        });
    }

    onVersesValueChanged(e) {
        let arr = [];
        arr.push(e.target.value);
        this.setState({
            verses: arr
        }, () => {
            console.log(this.state.verses);
        });
    }

    onCategoriesChanged(e) {
        console.log(e.target.value);
        this.setState({
            category: e.target.value
        })
    }

    onCatNameChanged(e) {
        console.log(e.target.value);
        this.setState({
            catName: e.target.value
        })
    }

    onCatDescChanged(e) {
        console.log(e.target.value);
        this.setState({
            catDesc: e.target.value
        })
    }

    onShortCodeChanged(e) {
        console.log(e.target.value);
        this.setState({
            shortCode: e.target.value
        })
    }

    onChanged = (e, index) => {
        const { name, value } = e.target;

        const list = [...this.state.inputList];
        list[index][name] = value;
        this.setState({
            list
        }, () => {
            console.log(list)
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

    fetchLibrary() {
        let headers = {
            "X-Parse-Application-Id": "wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb",
            "X-Parse-REST-API-Key": "qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"
        };

        Axios.get("https://parseapi.back4app.com/classes/library",
            {
                headers: headers
            }
        ).then((response) => {
            console.log(response.data.results);
            if (response) {
                this.setState({
                    fetched: response.data.results
                });
            }
        })
    }

    sendToServer() {
        let headers = {
            "X-Parse-Application-Id": "wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb",
            "X-Parse-REST-API-Key": "qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"
        };

        Axios.post("https://parseapi.back4app.com/classes/library",
            {
                "verses": this.state.list,
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
            if (response) {
                this.fetchLibrary();
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

    sendToCatServer() {
        let headers = {
            "X-Parse-Application-Id": "wu0PXewUw6fc67fu3YWt8Kk6u5dovykG9Itz3lwb",
            "X-Parse-REST-API-Key": "qQpgXE0wfkugEntT7CY44B6neifJ4rGO10bGMfnr"
        };

        Axios.post("https://parseapi.back4app.com/classes/category",
            {
                "category": this.state.catName,
                "short_code": this.state.shortCode,
                "description": this.state.catDesc,
            },
            {
                headers: headers
            }
        ).then((response) => {
            if (response) {
                this.setState({
                    _display: true,
                    catName: "",
                    catDesc: "",
                    shortCode: ""
                });
            }
        })
    }

    getCategoryNameFromId(id) {
        console.log(id);
        let value = _.findIndex(this.state.categories, { 'objectId': id });
        return value;
    }

    componentDidMount() {
        this.fetchCategories();
        this.fetchLibrary();
    }

    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col md={4} style={{ backgroundColor: "#e222e2", height: "100vh", position: "fixed" }}>
                        <div className="p-4" style={{ color: "white", fontWeight: "bolder", fontSize: "2em" }}>
                            Urhobo Catholic Hymnal
                        </div>
                        <div style={{ width: "100%", marginTop: "200px" }}>
                            <div>
                                <Button disabled={this.state.btn1} style={{ width: "100%" }} onClick={() => {
                                    this.setState({
                                        cat: this.state.cat ? false : true,
                                        btn1: true,
                                        btn2: false
                                    });
                                }} >
                                    Hymns
                                </Button>
                            </div>
                            <div>
                                <Button disabled={this.state.btn2} style={{ width: "100%" }} onClick={() => {
                                    this.setState({
                                        cat: this.state.cat ? false : true,
                                        btn1: false,
                                        btn2: true
                                    });
                                }}>
                                    Categories
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} style={{ position: "absolute", right: "0" }}>
                        {
                            this.state.cat ?
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
                                    <Form style={{ marginTop: "30px" }}>
                                        <FormGroup>
                                            <Input type="text" name="title" id="title" placeholder="Song Title" value={this.state.title} onChange={this.onTitleValueChanged} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="composer" id="composer" placeholder="Composer" value={this.state.composer} onChange={this.onComposerValueChanged} />
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
                                        {/* <FormGroup row> */}
                                        {
                                            this.state.inputList.map((item, i) => {
                                                return (
                                                    <div className="row mt-3" key={i}>
                                                        <Col sm={10}>
                                                            <Input type="textarea" name="verse" id="text" placeholder="Verses" onChange={e => this.onChanged(e, i)} />
                                                        </Col>
                                                        <Col sm={2}>
                                                            <Button title="Add more verses" onClick={
                                                                () => {
                                                                    this.setState({
                                                                        inputList: [...this.state.inputList, { verse: "" }]
                                                                    })
                                                                }
                                                            }><i className="fa fa-plus"></i></Button>
                                                        </Col>
                                                    </div>
                                                );
                                            })
                                        }
                                        {/* </FormGroup> */}
                                        <Button onClick={this.sendToServer} style={{ float: "right" }}>Submit</Button>
                                    </Form>
                                    <div>
                                        <Table hover>
                                            <thead>
                                                <tr>
                                                    <th>UCHB</th>
                                                    <th>Title</th>
                                                    <th>Composer</th>
                                                    <th>Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.fetched.map(value => {
                                                        return <tr>
                                                            <th scope="row">{value.uchb}</th>
                                                            <td>{value.title}</td>
                                                            <td>{value.composer}</td>
                                                            <td>{this.state.categories[this.getCategoryNameFromId(value.category)].category}</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="p-4" style={{ height: "60px", textAlign: "left", fontSize: "1.5em" }}>
                                        Categories
                                </div>
                                    {
                                        this.state._display &&
                                        <Alert className="success">
                                            Data uploaded category successfully to the server
                                    </Alert>
                                    }
                                    <Form style={{ marginTop: "50px" }}>
                                        <FormGroup>
                                            <Input type="text" placeholder="Category Title" value={this.state.catName} onChange={this.onCatNameChanged} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" placeholder="Category Short Code E.g (ENT) for Entrance" value={this.state.shortCode} onChange={this.onShortCodeChanged} />
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Input type="textarea" id="text" placeholder="Category Description" value={this.state.catDesc} onChange={this.onCatDescChanged} />
                                            </Col>
                                        </FormGroup>
                                        <Button onClick={this.sendToCatServer}>Submit</Button>
                                    </Form>
                                    <div>
                                        <Table hover>
                                            <thead>
                                                <tr>
                                                    <th>Short Code</th>
                                                    <th>Category</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.categories.map(value => {
                                                        return <tr>
                                                            <th scope="row">{value.short_code}</th>
                                                            <td>{value.category}</td>
                                                            <td>{value.description}</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}