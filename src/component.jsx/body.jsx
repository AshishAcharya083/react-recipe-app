import React from "react";

export default function Body() {
  return (
    <main>
      <div>
        <a href>Login</a>
        <a href>Sign UP</a>
      </div>

      <header>
        <h2>Recipes</h2>
        <h3>In Nepali language</h3>
      </header>
      <div>
        <h4>Popular recipes</h4>
        <div>{/* Cards will go here */}
            <div>
                <img src="" alt="Food"/>
                <div>
                    <span>Steam MOMO</span>
                    <span>मोमो हो यार</span>
                </div>
            </div>
        
        </div>
      </div>
    </main>
  );
}
