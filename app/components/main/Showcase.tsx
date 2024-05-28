export default function Showcase() {
    return (
      <section id="showcase" className="showcase">
        <div className="container">
          <div className="content">
            <h1>Task Manage Assistant You Gonna Love</h1>
            <p>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
            <a className="btn-theme-s" href="products">Get started for free</a>
            <h6>Largest companies use our tool to work efficiently</h6>
            <div className="brands">
              <img src="/images/brands/brand_1.png" />
              <img src="/images/brands/brand_2.png" />
              <img src="/images/brands/brand_3.png" />
              <img src="/images/brands/brand_4.png" />
            </div>
          </div>
        </div>
        <img className="background-image" src="/images/showcase-taskmaster.png" />
      </section>
    );
  }