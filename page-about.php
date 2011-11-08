<?php
/*
Template Name: About Page
*/
?>
<?php get_header(); ?>
		<section id="main_section">
			<section id="about_intro">
				<?php while (have_posts()) : the_post(); ?>
				<?php the_post_thumbnail('inline-large'); ?>
				<article id="intro_text">
				<h3>
				<?php 
					$short_description->the_field('description'); 
					$short_description->the_value();
				?>	
				</h3>
				</article><!-- intro_text -->
				
			</section><!-- #about_intro -->
			<section id="main_description">
				<h3>The UCLA Game Lab Mission ~</h3>
				<?php the_content(); ?>
			</section><!-- main_description -->
			
			<?php endwhile; ?>
			
			

			
			<section id="contact" class="embed">
				<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('contact') ) : endif; ?>
			</section>

		</section><!-- main_section -->
		

<?php get_footer(); ?>

