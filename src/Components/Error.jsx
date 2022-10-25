import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p className="mb-6">
                    the page you are looking for not avaible!
                  </p>

                  <Link to={'/'}
                  >
                    <button className="bg-[#0D5EF4] px-5 py-3 rounded-md  text-md font-semibold text-white uppercase ">
                      back to home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
