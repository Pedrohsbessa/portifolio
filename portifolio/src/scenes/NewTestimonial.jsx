// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";
// import LineGradient from "../components/LineGradient";
// import { motion } from "framer-motion";

// export default function Testimonial() {
//   try {
//     return (
//       <section
//         id="testimonials"
//         className="testimonials mt-24 flex flex-col"
//       >
//         <motion.div
//           className="md:w-1/3 text-center md:text-left"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <p className="font-playfair font-semibold text-4xl mb-5 text-red">
//             TESTIMONIALS
//           </p>
//           <LineGradient width="mx-auto w-2/5" />
//           <p className="mt-10">
//             Here's What People are Saying About My Work. Aliquam aliquet integer
//             ut fames odio in at. At magna ornare dictum lectus.
//           </p>
//         </motion.div>
//         <div className="md:flex md:justify-between flex-wrap gap-8">
//           <motion.div
//             className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-32 "
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6 }}
//             variants={{
//               hidden: { opacity: 0, scale: 0.8 },
//               visible: { opacity: 1, scale: 1 },
//             }}
//           >
//             <Card
//               color="transparent"
//               shadow={false}
//               className="w-full max-w-[26rem] "
//             >
//               <CardHeader
//                 color="transparent"
//                 floated={false}
//                 shadow={false}
//                 className="mx-0 flex items-center gap-4 pt-0 pb-8"
//               >
//                 <Avatar
//                   size="lg"
//                   variant="circular"
//                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//                   alt="tania andrew"
//                 />
//                 <div className="flex w-full flex-col gap-0.5">
//                   <div className="flex items-center justify-between">
//                     <Typography variant="h5" color="blue-gray">
//                       Tania Andrew
//                     </Typography>
//                   </div>
//                   <Typography color="blue-gray">
//                     Frontend Lead @ Google
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="mb-6 p-0">
//                 <Typography>
//                   &quot;I found solution to all my design needs from Creative
//                   Tim. I use them as a freelancer in my hobby projects for fun!
//                   And its really affordable, very humble guys !!!&quot;
//                 </Typography>
//               </CardBody>
//             </Card>
//           </motion.div>
//           <motion.div
//             className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-32"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6 }}
//             variants={{
//               hidden: { opacity: 0, scale: 0.8 },
//               visible: { opacity: 1, scale: 1 },
//             }}
//           >
//             <Card
//               color="transparent"
//               shadow={false}
//               className="w-full max-w-[26rem]"
//             >
//               <CardHeader
//                 color="transparent"
//                 floated={false}
//                 shadow={false}
//                 className="mx-0 flex items-center gap-4 pt-0 pb-8"
//               >
//                 <Avatar
//                   size="lg"
//                   variant="circular"
//                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//                   alt="tania andrew"
//                 />
//                 <div className="flex w-full flex-col gap-0.5">
//                   <div className="flex items-center justify-between">
//                     <Typography variant="h5" color="blue-gray">
//                       Tania Andrew
//                     </Typography>
//                   </div>
//                   <Typography color="blue-gray">
//                     Frontend Lead @ Google
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="mb-6 p-0">
//                 <Typography>
//                   &quot;I found solution to all my design needs from Creative
//                   Tim. I use them as a freelancer in my hobby projects for fun!
//                   And its really affordable, very humble guys !!!&quot;
//                 </Typography>
//               </CardBody>
//             </Card>
//           </motion.div>
//           <motion.div
//             className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-32"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 0.6 }}
//             variants={{
//               hidden: { opacity: 0, scale: 0.8 },
//               visible: { opacity: 1, scale: 1 },
//             }}
//           >
//             <Card
//               color="transparent"
//               shadow={false}
//               className="w-full max-w-[26rem]"
//             >
//               <CardHeader
//                 color="transparent"
//                 floated={false}
//                 shadow={false}
//                 className="mx-0 flex items-center gap-4 pt-0 pb-8"
//               >
//                 <Avatar
//                   size="lg"
//                   variant="circular"
//                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//                   alt="tania andrew"
//                 />
//                 <div className="flex w-full flex-col gap-0.5">
//                   <div className="flex items-center justify-between">
//                     <Typography variant="h5" color="blue-gray">
//                       Tania Andrew
//                     </Typography>
//                   </div>
//                   <Typography color="blue-gray">
//                     Frontend Lead @ Google
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="mb-6 p-0">
//                 <Typography>
//                   &quot;I found solution to all my design needs from Creative
//                   Tim. I use them as a freelancer in my hobby projects for fun!
//                   And its really affordable, very humble guys !!!&quot;
//                 </Typography>
//               </CardBody>
//             </Card>
//           </motion.div>
//         </div>
//       </section>
//     );
//   } catch {
//     return <h2 className="text-red">Testemunos</h2>;
//   }
// }
