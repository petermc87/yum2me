import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import { Link, useNavigate } from 'react-router-dom'

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: 'customer',
    error: ''
  }

  // navigate = useNavigate()
  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = { ...this.state }
      delete formData.error
      delete formData.confirm
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch (error) {
      this.setState({ error: 'Sign Up Failed' })
    }
    useNavigate('/home')
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    const disable = this.state.password !== this.state.confirm
    return (
      <>
        <div>
          <div className='form-container'>
            <form autoComplete='off' onSubmit={this.handleSubmit}>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name' required />
              <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='email' required />
              <input type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password' required />
              <input type='password' name='confirm' value={this.state.confirm} onChange={this.handleChange} placeholder='confirm' required />
              <label>Restaurant owner or driver? Please select below</label>
              {/* <input type='checkbox' name='userType' checked={this.state.userType} onChange={(evt) => this.setState({ userType: evt.target.checked })} /> */}
              <select type='text' name='userType' value={this.state.userType} onChange={(evt) => this.setState({ userType: evt.target.value })}>
                <option value='customer'>Customer</option>
                <option value='restaurant'>Restaurant</option>
                <option value='driver'>Driver</option>
              </select>
              <button type='submit' disabled={disable}>SIGN UP</button>
            </form>
          </div>
          <p className='error-message'>&nbsp;{this.state.error}</p>
        </div>
        <p>Already have an account? <Link to='/'>login</Link></p>
      </>
    )
  }
}

{ /* <input type='checkbox' name='userType' checked={this.state.userType} onChange={(evt) => this.setState({ userType: evt.target.checked })} /> */ }

{ /* <form autoComplete='off' onSubmit={() =>
  {this.handleSubmit}
  {useNavigate('/home')}
}> */ }

{ /* <form autoComplete='off' onSubmit={() =>
  this.handleSubmit
  useNavigate('/home')
}>   */ }

// import { Component } from 'react'
// import { signUp } from '../../utilities/users-service'
// import { useState } from 'react'

// export default class SignUpForm extends Component {

//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         userType: false,
//         error: ''

//     }

//     handleSubmit = async (evt) => {
//       evt.preventDefault()
//       try {
//         const formData = { ...this.state }
//         delete formData.error
//         delete formData.confirm
//         const user = await signUp(formData)
//         this.props.setUser(user)
//       } catch (error) {
//         this.setState({ error: 'Sign Up Failed' })
//       }
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name]: evt.target.value
//         })
//     }

//     render() {
//         const disable = this.state.password !== this.state.confirm;
//         return (
//           <div>
//             <div className="form-container">
//               <form autoComplete="off" onSubmit={this.handleSubmit}>
//                 <label>Name</label>
//                 <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//                 <label>Email</label>
//                 <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                 <label>Confirm</label>
//                 <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//                 <label>Are you a restaurant?</label>
//                 {/* <input type='checkbox' name='userType'checked={this.state.userType} onChange={this.handleChange} /> */}
//                 <input type='checkbox' name='userType' checked={this.state.userType} onChange={ (evt) => this.setState({ userType: evt.target.checked })} />
//                 <button type="submit" disabled={disable}>SIGN UP</button>
//               </form>
//             </div>
//             <p className="error-message">&nbsp;{this.state.error}</p>
//           </div>
//         );
//       }
// }
