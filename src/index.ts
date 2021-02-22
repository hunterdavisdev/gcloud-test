import express from "express"
import type { Request, Response } from "express"

const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Node 👋")
})

app.listen(PORT, () => console.log(`Express server started on port ${PORT} 🎉`))
