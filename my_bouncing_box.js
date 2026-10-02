<html style="background-color: black">
    <div
        id="my_bouncing_box"
        style="background-color: blue; border-radius: 3px; position: absolute; left: 0px; top: 0px; min-width: 100px; min-height: 100px; text-align: center; font-weight: bold; color: #999;">
    </div>
    <script type="text/javascript">


        const position = document.getElementById("my_bouncing_box");
        let dx = 10;
        let dy = 10;
        function my_bouncing_box(){
            let mybouncingboxleft = parseFloat(position.style.left);
            let mybouncingboxtop = parseFloat(position.style.top);
            mybouncingboxleft += dx;
            mybouncingboxtop += dy;
            if (mybouncingboxleft > window.innerWidth || mybouncingboxleft < 0){
                dx = parseFloat(dx)  * (-1);
                position.style.left = mybouncingboxleft + "px"
            }

            if (mybouncingboxtop > 100 || mybouncingboxtop < 0){
                dy = parseFloat(dy)  * (-1);
                position.style.top = mybouncingboxtop + "px"
            }
            position.style.left = mybouncingboxleft + "px"
            position.style.top = mybouncingboxtop + "px"
        }

        setInterval(my_bouncing_box, 20);
    </script>
</html>
