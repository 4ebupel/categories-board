import { FC, useEffect, useRef } from "react";
import "./Canvas.scss";
// import Category from "../../types/Category";
import Categories from "../../types/Categories";
import Shape from "../../types/Shape";

type Props = {
  categoriesAmount: number;
  categories: Categories;
  setUpperState: React.Dispatch<React.SetStateAction<Categories>>;
};

export const Canvas: FC<Props> = ({
  categoriesAmount,
  categories,
  setUpperState,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const canvas_width = canvas.width;
    // const canvas_height = canvas.height;

    // const shape = {
    //   id: categoriesAmount + 1,
    //   depth: 1,
    //   title: 'in development',
    //   x: number,
    //   y: number,
    //   width: number,
    //   height: number,
    //   children: Category[]
    // }

    // setUpperState(categories => ({
    //   ...categories,
    //   children: [...categories.children]
    // }));

    let current_shape_index: number;
    let is_dragging = false;
    let startX = 0;
    let startY = 0;
    let offsetX: number;
    let offsetY: number;

    let shape = {
      x: categories.x,
      y: categories.y,
      width: categories.width,
      height: categories.height,
      color: "gray",
    };

    const shapes: Shape[] = [];

    shapes.push(shape);

    const get_offset = function() {
      let canvas_offsets = canvas.getBoundingClientRect();
      offsetX = canvas_offsets.left;
      offsetY = canvas_offsets.top;
    }

    get_offset();

    window.onscroll = function() { get_offset() };
    window.onresize = function() { get_offset() };
    canvas.onresize = function() { get_offset() };

    const is_mouse_in_shape = function (
      x: number,
      y: number,
      shape: Shape
    ): boolean {
      let shape_left = shape.x;
      let shape_right = shape.x + shape.width;
      let shape_top = shape.y;
      let shape_bot = shape.y + shape.height;

      if (x > shape_left && x < shape_right && y > shape_top && y < shape_bot) {
        return true;
      }

      return false;
    };

    const mouse_down = function (event: MouseEvent) {
      event.preventDefault();

      startX = event.clientX - offsetX;
      startY = event.clientY - offsetY;

      let index = 0;
      for (let shape of shapes) {
        if (is_mouse_in_shape(startX, startY, shape)) {
          current_shape_index = index;
          is_dragging = true;
          return;
        }
        index++;
      }
    };

    const mouse_up = function (event: MouseEvent) {
      if (!is_dragging) {
        return;
      }
      event.preventDefault();
      is_dragging = false;
    };

    const mouse_out = function (event: MouseEvent) {
      if (!is_dragging) {
        return;
      }
      event.preventDefault();
      is_dragging = false;
    };

    const mouse_move = function (event: MouseEvent) {
      if (!is_dragging) {
        return;
      } else {
        event.preventDefault();
        let mouseX = event.clientX - offsetX;
        let mouseY = event.clientY - offsetY;

        let deltaX = mouseX - startX;
        let deltaY = mouseY - startY;

        let current_shape = shapes[current_shape_index];

        current_shape.x += deltaX;
        current_shape.y += deltaY;

        draw_shapes();

        startX = mouseX;
        startY = mouseY;
      }
    };

    canvas.onmousedown = mouse_down;
    canvas.onmouseup = mouse_up;
    canvas.onmouseout = mouse_out;
    canvas.onmousemove = mouse_move;

    const draw_shapes = function () {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let shape of shapes) {
        context.fillStyle = shape.color;
        context.fillRect(shape.x, shape.y, shape.width, shape.height);
      }
    };

    draw_shapes();

    console.log(canvas.width, canvas.height);
  }, [categories]);

  return <canvas className="canvas" ref={canvasRef}></canvas>;
};
