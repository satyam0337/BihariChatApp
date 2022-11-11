import React from 'react'
import img1 from "../assets/images/slide-1.jpg"
import img2 from "../assets/images/slide-2.jpg"
import img3 from "../assets/images/slide-3.jpg"
import img4 from "../assets/images/slide-4.jpg"
import img5 from "../assets/images/slide-5.jpg"

const Projects = () => {
  return (
    <div>

<section id="slider" class="pt-5" name="projects">
  <div class="container">
    <h1 class="text-center"><b>Responsive Owl Carousel</b></h1>
	  <div class="slider">
				<div class="owl-carousel">
					<div class="slider-card">
						<div class="d-flex justify-content-center align-items-center mb-4">
							<img src={img1} alt="" />
						</div>
						<h5 class="mb-0 text-center"><b>HTML CSS3 Tutorials</b></h5>
						<p class="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
					</div>
					<div class="slider-card">
						<div class="d-flex justify-content-center align-items-center mb-4">
							<img src={img2} alt=""/>
						</div>
						<h5 class="mb-0 text-center"><b>Wordpress Tutorials</b></h5>
						<p class="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
					</div>
					<div class="slider-card">
						<div class="d-flex justify-content-center align-items-center mb-4">
							<img src={img3} alt=""/>
						</div>
						<h5 class="mb-0 text-center"><b>PHP MySQL Tutorials</b></h5>
						<p class="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
					</div>
					<div class="slider-card">
						<div class="d-flex justify-content-center align-items-center mb-4">
							<img src={img4} alt=""/>
						</div>
						<h5 class="mb-0 text-center"><b>Javascript Tutorials</b></h5>
						<p class="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
					</div>
					<div class="slider-card">
						<div class="d-flex justify-content-center align-items-center mb-4">
							<img src={img5} alt=""/>
						</div>
						<h5 class="mb-0 text-center"><b>Bootstrap Tutorials</b></h5>
						<p class="text-center p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.</p>
					</div>
				</div>
			</div>
  </div>
</section>
    </div>
  )
}

export default Projects