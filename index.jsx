
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TextResizer() {
  const [text, setText] = useState("Texto de ejemplo");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-400 to-blue-400">
      <Card className="w-full max-w-md shadow-2xl p-4">
        <CardContent>
          <h1 className="text-xl mb-4 font-bold text-center">Text Resizer</h1>

          <div className="mb-4">
            <label className="text-sm">Texto:</label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escribe tu texto aquí"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm">Ancho (px):</label>
              <Input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="text-sm">Alto (px):</label>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
          </div>

          <motion.div
            className="mx-auto border rounded-2xl shadow p-4 bg-white overflow-hidden text-center"
            animate={{ width: width, height: height }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ resize: "both", overflow: "auto" }}
          >
            <p className="text-lg break-words">{text}</p>
          </motion.div>

          <Button className="w-full mt-4" onClick={() => {
            setText("Texto de ejemplo");
            setWidth(300);
            setHeight(100);
          }}>
            Reset
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
