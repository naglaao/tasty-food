import React from "react";

export const Contact = () => {
  return (
    <section id="contactHome" className="mt-5">
      <div>
        <h1 className="text-light">Join our family!</h1>
      </div>
      <div id="socialIcons">
        <button>
          <a href="https://facebook.com/"><i class="fa-brands fa-facebook-f"style={{color:"#7e9f60"}}></i>  </a>
        </button>
        <button>
          <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"style={{color:"#7e9f60"}}></i></a>
        </button>
        <button>
          <a href="mailto:xyx@gmail.com"><i class="fa-solid fa-envelope"style={{color:"#7e9f60"}}></i></a>
        </button>
        <button>
          <a href="tel:1234567890"><i class="fa-solid fa-phone"style={{color:"#7e9f60"}}></i></a>
        </button>
      </div>
    </section>
  );
};
