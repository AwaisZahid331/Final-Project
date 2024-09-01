import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      <br />
      <br />

      <div className="container-lg text-center mt-5">
          <div className="content">
            <h1 className="display-4 mb-4">Our Mission</h1>
            <p className="lead">
              Our website aims to make education accessible and empowering,
              providing support to individuals on their learning journeys. We
              believe that everyone deserves access to high-quality education,
              and thus, our mission is to offer resources and guidance that are
              accessible to all. We aspire to build a vibrant learning community
              where members can share their experiences, support each other, and
              strive to innovate in the field of education. Our goal is to
              create a positive global impact in education by connecting diverse
              audiences and establishing an inclusive and comprehensive learning
              platform.
            </p>
          </div>
        </div>
      <div class="container content-section">
        <div class="row">
          {/* <!-- Image Column --> */}
          <div class="col-md-6 image-column">
            <img
              src="https://images.pond5.com/silhouette-focused-stylish-old-man-footage-151331650_iconl.jpeg"
              class="img-fluid"
              alt="Building Image"
            />
          </div>

          {/* <!-- Content Column --> */}
          <div class="col-md-6">
            <div>
              <h3>How we do it?</h3>
              <p>
                Suspendisse a pellentesque dui, non felis. Maecenas malesuada
                elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut
                molestie a, ultricies porta urna.
              </p>
              <p>
                Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla
                imperdiet sit amet magna. Vestibulum dapibus, mauris nec
                malesuada fames ac turpis velit, rhoncus eu, luctus et interdum
                adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.
              </p>

              <ul>
                <li>We sell all over the world.</li>
                <li>Satisfaction or money refund guaranteed.</li>
                <li>Lifetime updates & support.</li>
                <li>24 hours shipping.</li>
                <li>We provide the best tools ever.</li>
              </ul>
            </div>

            <div class="mt-4">
              <h3>Why we do it?</h3>
              <p>
                Sed non neque elit. Sed ut imperdiet nisi. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris.
              </p>
              <p>
                Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                auctor a ornare odio. Sed non mauris vitae erat consequat auctor
                eu in elit. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Mauris in erat justo.
                Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                fermentum nunc.
              </p>
              <p>
                Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
                quam, ut aliquam massa nisl quis neque. Suspendisse in orci
                enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Our Mission Section */}

        {/* Our Services Section */}
        <div className="container mt-5 text-center">
          <h2 className="display-4 mb-5">Our Services</h2>
          <div className="card-group">
            {/* Card 1 */}
            <div className="card ">
              <img
                className="card-img-top"
                src="https://static3.avast.com/10001215/web/i/index2/for-home.jpg"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title border-bottom border-success">
                  What We Offer
                </h5>
                <p className="card-text">
                  Quality resources, expert guidance, and a collaborative
                  community. Access top-notch materials, connect with peers, and
                  explore new learning methods.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card ">
              <img
                className="card-img-top"
                src="https://static3.avast.com/10001215/web/i/index2/for-partners.jpg"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title border-bottom border-success">
                  Join Our Community
                </h5>
                <p className="card-text">
                  Become part of a diverse, inclusive learning network. Share
                  experiences, gain insights, and contribute to a global
                  educational impact. Let's learn and grow together!
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card ">
              <img
                className="card-img-top"
                src="https://static3.avast.com/10001215/web/i/index2/for-business.jpg"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title border-bottom border-success">
                  Our Vision
                </h5>
                <p className="card-text">
                  Striving for a world where education knows no boundaries. We
                  envision a future where learning fosters individual growth,
                  creating a positive global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default About;
