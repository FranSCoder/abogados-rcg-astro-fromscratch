import Button from "../components/Button";

function Especializacion({ imageRoute, title, text }) {
    return (
        <>
            <div className="relative flex flex-col gap-1 text-main-gold left-2 bg-gray-200 p-4 rounded-sm w-9/12">
                <h3 className="text-2xl max-md:text-xl font-semibold">{title}</h3>
                <p className="text-sm/3.5 lg:text-base/3.5 font-medium">{text}</p>
            </div>
            <div
                className="overflow-hidden absolute inset-0 opacity-50 bg-cover bg-center -z-10 rounded-sm"
                style={
                    import.meta.env.MODE === "production"
                        ? {
                              backgroundImage: `url(${
                                  "/abogados-rcg-astro-fromscratch/" +
                                  imageRoute
                              })`,
                          }
                        : { backgroundImage: `url(${imageRoute})` }
                }
            />
        </>
    );
}

export default Especializacion;
