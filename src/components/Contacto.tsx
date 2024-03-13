

export const Contacto = () => {
  return (
    <main className="py-14 hero min-h-screen">

      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-white font-semibold">
            Contacto
          </h3>
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className='text-white'>
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium text-white">
                  Nombre
                </label>
                <input
                  type="text "
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium text-white">
                  Apellido
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium text-white">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>


            <button
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
