import React, { useState, useEffect } from "react"
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react"

const Contact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

	return (
		<>
			contact me
			<Form>
				<Form.Group>
					<Form.Field
						id="form-input-control-first-name"
						control={Input}
						label="Full name"
						placeholder="Full name"
					/>
					<Form.Field
						id="form-input-control-email"
						control={Input}
						label="Email"
						placeholder="you@connect.com"
					/>
                        </Form.Group>
					<Form.Field
						id="form-textarea-control-opinion"
						control={TextArea}
						label="Your message"
						placeholder="Your Message"
					/>
			</Form>
		</>
	)
}

export default Contact
