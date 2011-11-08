<?php
/*
Template Name: People Page
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
				<h3>The UCLA Game Lab Team ~</h3>
				<?php the_content(); ?>
			</section><!-- main_description -->
			
			<?php endwhile; ?>
			
			
			<section id="bio_banner">

					
				<article id="bio_banner_background"><img src="<?php bloginfo('template_directory'); ?>/images/yellow_banner.png" /></article>
				<article id="bio_banner_title">
					<p>
						<span>CURRENT GAME LAB TEAM ~</span> 
						Here's a little more about people who work in the game lab
					</p>
				</article>
			</section><!-- news_feed -->
			
			<section id="bio_spots">
			
			<?php 
				$args = array( 
					'post_type' => 'person',
					'tag' => 'active',
					'order' => 'ASC',
					//use tag__not_in to handle posts that are tagged slider and feature
					//slider cat id is 33
					//'tag__not_in' => array(33),
				);
				$loop = new WP_Query($args);
				$count = 1;
	 			while ( $loop->have_posts() ) : $loop->the_post(); 
				if($count%3==0){ ?>
				<article class="bio_article last">
				<?php } else { ?>
				<article class="bio_article">
				<?php } ?>
						<?php the_post_thumbnail('featured');  ?>
					<div class="bio_article_text">
							<?php the_title( '<h3>', '</h3>' ); ?>
						<p>

							<?php 
								$short_description->the_field('description'); 
								$short_description->the_value();
							?>
						</p>
					</div><!-- bio_article_text -->
					
					<? 
					// $lab_employee->the_field('job_title');
					$my_meta = $lab_employee->the_meta();
					if($my_meta['job_title'] != ""){ 
					
					?>
						<div class="bio_badge blue">
							<p>Game Lab <? echo $my_meta['job_title']; ?></p>
						</div><!-- lab_title -->
					<? } ?>
					
					
	
					
					<div class="bio_badge yellow">
						<p>
						<?
							$person_department->the_field('person_department');
							$person_department->the_value();
						?> 
						<?
							$person_title->the_field('person_title');
							$person_title->the_value();
						?> 

						</p>
					</div><!-- bio_title -->
					

							
						<?	
							$i=1;
							$my_meta = $link_out->the_meta();
							foreach($my_meta['out_links'] as $link)
							{
								
								if($i%2==0){
									?>
								<div class="bio_badge yellow">
								<? }else{ ?>
								<div class="bio_badge blue">	
								<? } ?>
									<a href="<? echo $link['link']; ?>" ><p><? echo $link['title']; ?></p></a>
								</div><!-- bio_links -->
						<?
						 		$i++;
							} 
						?>


					
				</article><!-- bio_article -->
			<?php 
			$count ++;
			endwhile; ?>				
			</section><!-- bio_spots -->
			

		</section><!-- main_section -->
		

<?php get_footer(); ?>

