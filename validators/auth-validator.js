const {z} = require("zod")

const loginSchema = z.object({
    voterId:z
    .string({required_error:"VoterId is required"})
    // .min(3,{message: "Email must be of atleast 3 characters" })
    // .max(50,{message:"Email must not have more than 50 characters"}),
})

const signupSchema = loginSchema.extend({
    state:z
    .string({required_error:"State is required"}),

    constituency:z
    .string({required_error:"District is required"}),

})

module.exports = {signupSchema,loginSchema}


