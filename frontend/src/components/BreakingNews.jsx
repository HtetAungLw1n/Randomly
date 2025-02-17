import React from "react";

const BreakingNews = () => {
  return (
    <>
      {/* breaking new section  */}
      <div className="bg-offWhite flex flex-col-reverse lg:flex-row justify-between shadow-lg shadow-shadowGray">
        {/* text area  */}
        <div className="px-4 lg:px-8 py-4 lg:w-1/2 flex flex-col justify-between">
          <div>
            {/* content  */}
            <div className="text-luxRed">Breaking News</div>
            <div className="text-3xl font-semibold mt-0 lg:mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              cum asperiores
            </div>
            <div className="mt-8 hidden lg:block font-lato text-coolGray text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              inventore impedit optio est tenetur voluptas fugit possimus,
              provident voluptates rem sit eos, dignissimos odit. Quo vitae
              excepturi nemo minima obcaecati iusto facilis unde aliquam ut
              consequuntur! Tempore enim consectetur hic deserunt doloribus,
              consequatur maiores sapiente repellat quia repudiandae saepe,
              provident vitae aspernatur. In, ratione illum vero nemo eligendi
              esse impedit!
            </div>
          </div>
          {/* author + date  */}
          <div>
            <div className="text-coolGray mt-4 lg:mt-0 font-lato text-sm">
              16/2/2025
            </div>
          </div>
        </div>
        {/* text area  */}

        {/* img area  */}

        <img
          src="https://img.freepik.com/premium-photo/abstract-design-pattern-background_85347-6492.jpg"
          alt=""
          className="w-full lg:w-1/2"
        />

        {/* img area  */}
      </div>
    </>
  );
};

export default BreakingNews;
