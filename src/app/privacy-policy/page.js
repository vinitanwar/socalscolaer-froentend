// app/components/TermsPage.jsx (or wherever you organize components)

import Banner from "../components/Banner";

export default function page() {
  return (
    <>
      <Banner title="Privacy Policy" />

      <div className="py-16">
        <div className="container mx-auto ">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold ">
                    Who We Are
                  </h2>
                  <p className="text-black">
                    Many desktop publishing packages and web page editors use
                    Lorem Ipsum as default model text, and a search for 'lorem
                    ipsum' will uncover many websites still in use. Various
                    versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like).
                  </p>
                  <p className="text-black">
                    There are many variations of passages of Lorem Ipsum
                    available, but they have suffered alteration in some form,
                    injected humour, or randomised words which don't look even
                    slightly believable.
                  </p>
                  <p className="text-black">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the
                    Internet repeat predefined chunks as necessary, making this
                    the first generator on the Internet. It uses a dictionary of
                    over 200 Latin words, combined with...
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold ">
                    Comments
                  </h2>
                  <p className="text-black">
                    It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence structures to generate Lorem
                    which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </p>
                  <p className="text-black">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up
                    the more obscure Latin words, consectetur, from a Lorem
                    Ipsum passage...
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold ">
                    Media
                  </h2>
                  <p className="text-black">
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance.
                  </p>
                  <p className="text-black">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 from
                    "de Finibus Bonorum et Malorum" by Cicero are also
                    reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    Cookies
                  </h2>
                  <p className="text-black">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                  <p className="text-black">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default text. Sometimes by
                    accident, sometimes on purpose (injected humour and the
                    like).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
