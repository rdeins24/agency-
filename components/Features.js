import { FaCreativeCommonsShare, FaDharmachakra,FaEdit} from 'react-icons/fa'


const features = [
  {
    name: 'Web Development',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: FaCreativeCommonsShare,
  },
  {
    name: 'Social Media',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: FaCreativeCommonsShare,
  },
  {
    name: 'Design UI/UX',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: FaCreativeCommonsShare,
  },
  {
    name: 'Marketing Digital',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FaCreativeCommonsShare,
  },
]

export default function Features() {
  return (
    <div className="  py-24 sm:py-10 bg-[#0d0e11]  ">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2  text-3xl font-bold tracking-wider  sm:text-5xl ">
          <span className='from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent '>Everything you need to </span>   deploy your app     Everything you need to deploy your app  Everything you need to deploy your app
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-white bg-slate-300 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 text-white ">
                <dt className=" font-semibold leading-7 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-3xl">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-400 via-cyan-900 to-blue-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div >
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
