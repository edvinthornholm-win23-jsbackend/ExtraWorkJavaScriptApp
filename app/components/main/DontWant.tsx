import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  newsletterCheckboxes: {
    dailyNewsletter: boolean;
    eventUpdates: boolean;
    advertisingUpdates: boolean;
    startupsWeekly: boolean;
    weekInReview: boolean;
    podcasts: boolean;
  };
  email: string;
};

export default function DontWant() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="dontWant">
      <div className="container">
        <div className="headning">
          <h1>Don't Want to Miss Anything?</h1>
          <img src="/images/Group.svg" alt="symbol of arrow" />
        </div>

        <div className="contentSignUp">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contentSign">
              <div className="column">
                <h6>Sign up for <br /> Newsletters</h6>
              </div>
              <div className="column">
                <div className="input-group">
                  <input type="checkbox" {...register('newsletterCheckboxes.dailyNewsletter')} />
                  <label>Daily Newsletter</label>
                </div>
                <div className="input-group">
                  <input type="checkbox" {...register('newsletterCheckboxes.eventUpdates')} />
                  <label>Event Updates</label>
                </div>
              </div>
              <div className="column">
                <div className="input-group">
                  <input type="checkbox" {...register('newsletterCheckboxes.advertisingUpdates')} />
                  <label>Advertising Updates</label>
                </div>
                <div className="input-group">
                  <input type="checkbox" {...register('newsletterCheckboxes.startupsWeekly')} />
                  <label>Startups Weekly</label>
                </div>
              </div>
              <div className="column">
                <div className="input-group">
                  <input type="checkbox" {...register('newsletterCheckboxes.weekInReview')} />
                  <label>Week in Review</label>
                </div>
                <div className="input-group">
                  <input type="checkbox" {...register('newsletterCheckboxes.podcasts')} />
                  <label>Podcasts</label>
                </div>
              </div>
            </div>

            <div className="contentEmail">
              <div className="email">
                <div id="form-email" className="input-group">
                  <input type="text" {...register('email', { required: 'Email is required' })} placeholder="Enter your email" />
                </div>
                <button id="form-submit" type="submit" className="btn-theme">Subscribe</button>
              </div>
              {errors.email && <span>{errors.email.message}</span>}
              <div className="terms">
                <p>
                  <a href="#">*</a> Yes, I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.
                </p>
                <p><a href="/unsubscribe">Unsubscribe</a></p>
              </div>
            </div>
          </form>
        </div>

        {/* Handle status messages */}
        {/* {StatusMessage && (
          <span className="alert alert-success">
            {StatusMessage}
          </span>
        )} */}
      </div>
    </div>
  );
}
