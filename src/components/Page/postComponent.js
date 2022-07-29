import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { postOrg } from "../../redux/api";
import { proPost } from "../../redux/api";
const schema = yup.object().shape({
  userName: yup.string().min(3).max(10).required("required your name"),
  projectName: yup.string().min(3).max(10).required("required your name"),
  urlImg: yup.string().url(),
  description: yup.string(),
  dayPost: yup.string(),
  topic: yup.string(),
  address: yup.string(),
  city: yup.string(),
  contact: yup.string().email(),
  number: yup.number(),
});
function PostPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <section className="container card card_main">
      <h3>POST A PROJECT</h3>
      <form
        className="card-body"
        onSubmit={handleSubmit((data) => {
          const pro = {
            name: data.projectName,
            image: data.urlImg,
            tag: data.description,
            location: data.address,
            category: data.topic,
          };
          
        })}
      >
        <div className="row">
          <div class="form-group focused col-12 col-lg-12">
            <label class="form-control-label" htmlFor="input-username">
              Image url
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="url"
              {...register("urlImg")}
            />
            <small className="feedback">{errors.urlImg?.message}</small>
          </div>
        </div>
        <div className="row">
          <div class="form-group focused col-6 col-lg-6">
            <label class="form-control-label" htmlFor="input-username">
              Username
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="Username"
              {...register("userName")}
              required
            />
            <small className="feedback">{errors.userName?.message}</small>
          </div>

          <div class="form-group focused col-6 col-lg-6">
            <label class="form-control-label" htmlFor="input-username">
              Project name
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="project name"
              {...register("projectName")}
              required
            />
            <small className="feedback">{errors.projectName?.message}</small>
          </div>

          <div class="form-group focused col-6 col-lg-6">
            <label class="form-control-label" htmlFor="input-username">
              Day post
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="day of post"
              {...register("dayPost")}
              required
            />
            <small className="feedback">{errors.dayPost?.message}</small>
          </div>

          <div class="form-group focused col-6 col-lg-6">
            <label class="form-control-label" htmlFor="input-username">
              Topic
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="topic"
              {...register("topic")}
              required
            />
            <small className="feedback">{errors.topic?.message}</small>
          </div>
        </div>
        <div className="row">
          <div class="form-group focused">
            <label>Discription</label>
            <textarea
              rows="4"
              class="form-control form-control-alternative"
              placeholder="A few words about you ..."
              {...register("description")}
              required
            >
              A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.
            </textarea>
            <small className="feedback">{errors.description?.message}</small>
          </div>
        </div>
        <hr />
        <h3 className="settext">CONTACT INFORMATION</h3>
        <div className="row">
          <div class="form-group focused col-12 col-lg-12">
            <label class="form-control-label" htmlFor="input-username">
              Address
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="address"
              {...register("address")}
              required
            />
            <small className="feedback">{errors.address?.message}</small>
          </div>
        </div>
        <div className="row">
          <div class="form-group focused col-4 col-lg-4">
            <label class="form-control-label" htmlFor="input-username">
              City
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="HCM-city"
              {...register("city")}
              required
            />
            <small className="feedback">{errors.city?.message}</small>
          </div>

          <div class="form-group focused col-4 col-lg-4">
            <label class="form-control-label" htmlFor="input-username">
              Number
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="number"
              {...register("number")}
              required
            />
            <small className="feedback">{errors.number?.message}</small>
          </div>

          <div class="form-group focused col-4 col-lg-4">
            <label class="form-control-label" htmlFor="input-username">
              Contact
            </label>
            <input
              type="text"
              id="input-username"
              class="form-control form-control-alternative"
              placeholder="email"
              {...register("contact")}
              required
            />
            <small className="feedback">{errors.contact?.message}</small>
          </div>
          <div className="row">
            <div className="col-2 col-lg-2 offset-md-10">
              <button className="button-bg" type="submit">
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default PostPage;
