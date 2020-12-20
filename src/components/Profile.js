import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Select from 'react-select';

const genderOptions = [{label: "Male", value: "M"}, {label: "Female", value: "F"}];

const sortThenObjectify = lst => lst.sort((a, b) => a > b ? 1 : -1).map(x => ({value: x, label: x}));

const NAME_ERROR = "Name should be between 3 and 20 characters, inclusive."

const RATE_ERROR = "Rate must be non-negative integers."

const INTRO_ERROR = "Introduction must be at most 200 characters."

const CITIES_ERROR = "You must select at least one city."

const LANG_ERROR = "You must select at least one language."

const isValidName = name => name.length > 2 && name.length < 21;

const isValidRate = rate => rate >= 0; // decimal should be automatically rounded

const isValidIntro = intro => intro.length < 201;

const isValidCities = cities => cities.length > 0;

const isValidLanguages = lang => lang.length > 0;

const Profile = (props) => {
    const { currencies, citiesList } = props;
    const [ formState, setFormState ] = useState("")
    const [ nameError, setNameError ] = useState(false); // should be at least 3 chars and at most 20 chars
    const [ rateError, setRateError ] = useState(false); // should be at least 0, no cents allowed?
    const [ introError, setIntroError ] = useState(false); // should not be longer than 200 characters
    const [ citiesError, setCitiesError ] = useState(false); // at least one
    const [ langError, setLangError ] = useState(false); // at least one

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // alert(form.name.value);
        console.log(form.name.value);
        console.log(form.intro.value);
        console.log(form.gender.value);
        console.log(form.currency.value);
        console.log(form.email.value);
        console.log(Array.from(form.cities).map(node => node.defaultValue));
        console.log(Array.from(form.languages).map(node => node.defaultValue));
    }

    return (
        <>
            <h2 className="city-header">My Guide Profile</h2>
            <Form style={{margin: 30}} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" defaultValue="currentName" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="intro">
                        <Form.Label>Gender</Form.Label>
                        <Select
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Select your gender"
                        defaultValue="M"
                        isDisabled={false}
                        isLoading={false}
                        isClearable={true}
                        isRtl={false}
                        isSearchable={false}
                        name="gender"
                        options={genderOptions}
                        onChange={void(0)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control disabled type="email" defaultValue="currentEmail@example.com" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="currency">
                        <Form.Label>Currency</Form.Label>
                        <Select
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Currency"
                        defaultValue="USD"
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        name="currency"
                        options={sortThenObjectify(currencies)}
                        onChange={void(0)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="hourlyRate">
                        <Form.Label>Hourly Rate</Form.Label>
                        <Form.Control type="currency" default={0} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="intro">
                        <Form.Label>Brief Introduction</Form.Label>
                        <Form.Control as="textarea" type="text" defaultValue={"currentIntroduction ".repeat(20)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="cities">
                        <Form.Label>Cities</Form.Label>
                        <Select
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Select your cities"
                        defaultValue="Singapore, Singapore"
                        isMulti
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        name="cities"
                        options={sortThenObjectify(citiesList)}
                        onChange={void(0)}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="languages">
                        <Form.Label>Languages</Form.Label>
                        <Select
                        className="basic-single"
                        classNamePrefix="select"
                        placeholder="Select your languages"
                        defaultValue="English"
                        isMulti
                        isDisabled={false}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        name="languages"
                        options={sortThenObjectify(["English", "Spanish", "Chinese", "Hindi", "Russian"])}
                        onChange={void(0)}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Button variant="success" type="submit" className="mr-sm-2">Save Changes</Button>
                        <Button variant="danger" className="ml-sm-2">Delete Account</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    )
}

export default Profile;