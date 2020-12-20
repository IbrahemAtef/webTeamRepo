import React from 'react';
import personal from '../../imgs/personal.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faBars,
  faPlusCircle,
  faEdit,
  faEye,
  faUserCircle,
  faPlus,
  faImage,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import axios from 'axios';
import swal from 'sweetalert';

class Dashboard extends React.Component {
  state = {
    title: '',
    description: '',
    image: '',
    type: '',
    cheif: null,
  };

  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/');
    } else {
      this.getUser();

      ///////////////// jquery ///////////////
      $(function () {
        $('.nav_btn').on('click', function () {
          $('.mobile_nav_items').toggleClass('active');
        });
        $('.sidebar > span').on('click', function (e) {
          let classN = $(e.currentTarget).attr('data-section');
          $(e.currentTarget)
            .addClass('active')
            .siblings()
            .removeClass('active');
          $(classN).show().siblings().hide();
        });
        $('.btn').on('click', function () {
          $($(this).siblings()[1]).append(`<p>
          <label>${$($(this).siblings()[1]).children().length + 1}.</label>
          <input type="text" >
          </p>`);
        });
        $('.spinner-border').hide();
      });
    }
  }

  async getUser() {
    const options = {
      method: 'GET',
      headers: { 'x-auth-token': localStorage.getItem('token') },
      url: '/api/auth/tokenUser',
    };
    try {
      var response = await axios(options);
      this.setState({
        cheif: response.data,
      });
    } catch (error) {
      window.location.reload();
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit() {
    var ingredients = [];
    $('.ingredients > .steps > p > input').each((index, input) => {
      let text = $(input).val();
      ingredients.push(text);
    });
    var steps = [];
    $('.preparation_steps > .steps > p > input').each((index, input) => {
      let text = $(input).val();
      steps.push(text);
    });
    const { title, description, image, type } = this.state;
    const cheifID = this.state.cheif && this.state.cheif._id;
    try {
      if (ingredients.join("").length === 0 || steps.join("").length === 0) {
        await swal('OoOps!', 'Make sure to add the ingredients and preparation steps.', 'error');
        return;
      }
      var msg = await( await axios.post('/api/recipes/addRecipe', {
        title,
        description,
        ingredients,
        steps,
        image,
        type,
        cheifID,
      })).data;
      await swal('Good job!', msg, 'success');
      this.setState({
        title: '',
        description: '',
        image: '',
        type: '',
      })
      $('.steps > p > input').each((index, input) => {
        $(input).val("");
      });
    } catch (error) {
      await swal('OoOps!', 'Failed to add recipe.', 'error');
    }
  }

  async uploadImage(e) {
    $('.spinner-border').show();
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append('file', file);
    formData.append('upload_preset', 'snkyxvjw');
    try {
      var image = await (
        await axios.post(
          'https://api.cloudinary.com/v1_1/dbeuaqex2/image/upload',
          formData,
        )
      ).data.url;
      await swal('Good job!', 'The image has uploaded.', 'success');
      this.setState({ image }, () => {
        $('.spinner-border').hide();
      });
    } catch (error) {
      swal('OoOps!', "The image didn't upload, try again.", 'error');
    }
  }

  render() {
    return (
      <div>
        <input type='checkbox' id='check' />
        {/* <!--header area start--> */}
        <header>
          <label htmlFor='check'>
            <FontAwesomeIcon icon={faBars} id='sidebar_btn' />
          </label>
          <div className='left_area'>
            <div className='img-logo'>
              <img
                src='https://www.graphicsprings.com/filestorage/stencils/c96ff13ef8e250d256b66881d5b767be.png?width=500&height=500'
                alt='logo'
              />
            </div>
            <h3>Matbakhi</h3>
          </div>
          <div className='right_area'>
            <span
              className='logout_btn'
              onClick={() => {
                localStorage.removeItem('token');
                this.props.history.push('/');
              }}
            >
              Logout <FontAwesomeIcon icon={faSignOutAlt} />{' '}
            </span>
          </div>
        </header>
        {/* start sidebar */}
        <div className='sidebar'>
          <div className='profile_info'>
            <img src={personal} className='profile_image' alt='' />
            <h4>Ahmed</h4>
          </div>
          <span data-section='.add-recipe' className='active'>
            <FontAwesomeIcon icon={faPlusCircle} />
            <span>Add Recipe</span>
          </span>
          {/* <span  data-section='.edit-recipe'>
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit Recipe</span>
          </span> */}
          <span data-section='.show-recipes'>
            <FontAwesomeIcon icon={faEye} />
            <span>Show Recipe</span>
          </span>
          <span data-section='.profile'>
            <FontAwesomeIcon icon={faUserCircle} />
            <span>Profile</span>
          </span>
        </div>
        {/* start content */}
        <div className='content'>
          {/* add recipe */}
          <div className='add-recipe'>
            <h2>Add a new recipe</h2>
            <div className='recipe'>
              <div className='title'>
                <h3>Title of the recipe:</h3>
                <input
                  name='title'
                  type='text'
                  value={this.state.title}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: 78 + '%', marginLeft: 25 + 'px' }}
                />
              </div>
              <div className='left'>
                <div className='ingredients'>
                  <h3>Add Recipe Ingredients</h3>
                  <div className='steps'>
                    <p>
                      <label>1. </label>
                      <input type='text' />
                    </p>
                    <p>
                      <label>2. </label>
                      <input type='text' />
                    </p>
                    <p>
                      <label>3. </label>
                      <input type='text' />
                    </p>
                  </div>
                  <button className='btn'>
                    More Ingredients <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className='add_img'>
                  <h3>Choose Recipe image:</h3>
                  <div role='status' className='spinner-border'>
                    <span className='sr-only'>Loading...</span>
                  </div>
                  <p>
                    <label>
                      <input
                        type='file'
                        name='file'
                        onChange={this.uploadImage.bind(this)}
                      />
                      <FontAwesomeIcon icon={faImage} />{' '}
                      <span className='add-photos'>Add Photo</span>
                    </label>
                  </p>
                  {/* <Spinner animation="border" variant="primary" /> */}
                </div>
                <div className='choice'>
                  <div className='choice-head'>
                    <label>Video Type</label>
                  </div>
                  <select
                    className='custom-select'
                    name='type'
                    value={this.state.type}
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value>Choose...</option>
                    <option value='grills'>Grills</option>
                    <option value='pastries'>Pastries</option>
                    <option value='sea-food'>Sea Food</option>
                    <option value='soups'>Soups</option>
                    <option value='sweets'>Sweets</option>
                  </select>
                </div>
              </div>
              <div className='right'>
                <div className='preparation_steps'>
                  <h3>Add Recipe preparation steps:</h3>
                  <div className='steps'>
                    <p>
                      <label>1.</label>
                      <input type='text' />
                    </p>
                    <p>
                      <label>2.</label>
                      <input type='text' />
                    </p>
                    <p>
                      <label>3.</label>
                      <input type='text' />
                    </p>
                  </div>
                  <button className='btn'>
                    More steps <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className='add_desc'>
                  <h3>Description: </h3>
                  <textarea
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange.bind(this)}
                  ></textarea>
                </div>
              </div>
              <div className='clear_fix'></div>
              <button onClick={this.handleSubmit.bind(this)}>
                Save new recipe
              </button>
            </div>
          </div>

          {/* <div className='edit-recipe'>edit</div> */}
          <div className='show-recipes'>
            <h2>Show Recipes</h2>
            <div className='recipe'>
              <div className='post-block'>
                <div className='post-img-div'>
                  <img
                    src='https://townhub.kwst.net/images/all/1.jpg'
                    alt='img'
                  />
                </div>
                <div className='post-descri-div'>
                  <h4>New Version for huawai</h4>
                  <p>40 Journal Square Plaza, NJ, USA</p>
                </div>
                <div className='post-edit-delete'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='edit-icon'
                    title='Edit recipe'
                    // onClick={() => {
                    //   this.handleEdit(post.id);
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='delete-icon'
                    title='Delete recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className='show-icon'
                    title='Show recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                </div>
              </div>
              <div className='post-block'>
                <div className='post-img-div'>
                  <img
                    src='https://townhub.kwst.net/images/all/1.jpg'
                    alt='img'
                  />
                </div>
                <div className='post-descri-div'>
                  <h4>New Version for huawai</h4>
                  <p>40 Journal Square Plaza, NJ, USA</p>
                </div>
                <div className='post-edit-delete'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='edit-icon'
                    title='Edit recipe'
                    // onClick={() => {
                    //   this.handleEdit(post.id);
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='delete-icon'
                    title='Delete recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className='show-icon'
                    title='Show recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                </div>
              </div>
              <div className='post-block'>
                <div className='post-img-div'>
                  <img
                    src='https://townhub.kwst.net/images/all/1.jpg'
                    alt='img'
                  />
                </div>
                <div className='post-descri-div'>
                  <h4>New Version for huawai</h4>
                  <p>40 Journal Square Plaza, NJ, USA</p>
                </div>
                <div className='post-edit-delete'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='edit-icon'
                    title='Edit recipe'
                    // onClick={() => {
                    //   this.handleEdit(post.id);
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='delete-icon'
                    title='Delete recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className='show-icon'
                    title='Show recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                </div>
              </div>
              <div className='post-block'>
                <div className='post-img-div'>
                  <img
                    src='https://townhub.kwst.net/images/all/1.jpg'
                    alt='img'
                  />
                </div>
                <div className='post-descri-div'>
                  <h4>New Version for huawai</h4>
                  <p>40 Journal Square Plaza, NJ, USA</p>
                </div>
                <div className='post-edit-delete'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='edit-icon'
                    title='Edit recipe'
                    // onClick={() => {
                    //   this.handleEdit(post.id);
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='delete-icon'
                    title='Delete recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className='show-icon'
                    title='Show recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                </div>
              </div>
              <div className='post-block'>
                <div className='post-img-div'>
                  <img
                    src='https://townhub.kwst.net/images/all/1.jpg'
                    alt='img'
                  />
                </div>
                <div className='post-descri-div'>
                  <h4>New Version for huawai</h4>
                  <p>40 Journal Square Plaza, NJ, USA</p>
                </div>
                <div className='post-edit-delete'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='edit-icon'
                    title='Edit recipe'
                    // onClick={() => {
                    //   this.handleEdit(post.id);
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='delete-icon'
                    title='Delete recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className='show-icon'
                    title='Show recipe'
                    // onClick={() => {
                    //   $('.drop-delete').show();
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='profile'>profile</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
