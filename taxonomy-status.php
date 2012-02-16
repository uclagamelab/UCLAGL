<?php
/*
Template Name: None
*/
?>
<?php get_header(); ?>
		<section id="main_section">
			<section id="about_intro">
				<img src="<?php bloginfo('template_directory'); ?>/images/people_feature.jpg" />
				<article id="intro_text">
				<h3>
				THE GAME LAB BRINGS STUDENTS FROM A VARIETY OF BACKGROUNDS TOGETHER TO CREATE, PLAY, AND DISCUSS GAMES.
				</h3>
				</article><!-- intro_text -->
				
			</section><!-- #about_intro -->
			<section id="main_description">
				<h3>The UCLA Game Lab Team ~</h3>
				<p>
				The UCLA Game lab serves the creative development of bachelor’s, master’s, and PhD students from a variety of backgrounds including art, design, computer science, architecture, math, film, engineering, and others. This range of specialties enables the Game Lab to work in a variety of areas. Students explore theoretical issues surrounding games, collaborate on experimental ideas and approaches, develop reusable technologies and tools. Students produce experimental games, integrating every stage of production including research, game design, narrative development, computer programming, visual design, sound design, hardware fabrication and game testing.
				</p><p>
				The team’s diverse talents also enable the Lab to produce tutorials, scholarship, events, and other useful resources for game theorists, designers, programmers, and artists both at UCLA and in the wider academic and artistic community. Check out the Resources area of the site to see what the Lab has to offer.
				</p>
			</section><!-- main_description -->
						
			<section id="bio_banner">

					
				<article id="bio_banner_background"><img src="<?php bloginfo('template_directory'); ?>/images/yellow_banner.png" /></article>
				<article id="bio_banner_title">
					<p>	<?php $term = get_term_by( 'name', single_term_title('',False), 'status') ?>
						<span><?php single_term_title(); ?> ~</span> 
						 <?php echo $term->description; ?>
					</p>
				</article>
			</section><!-- news_feed -->
			
			<section id="bio_spots">
			
			<?php while ( have_posts() ) : the_post(); ?>
				
				<article <?php post_class('bio_article'); ?>>
						<?php the_post_thumbnail('featured');  ?>
					<div class="bio_article_text">
							<?php the_title( '<h3>', '</h3>' ); ?>
						<p>
							
							<?php 
								$short_description->the_field('description'); 
								$short_description->the_value();
							?>
							
							<div>Hello! </div> 
						</p>
					</div><!-- bio_article_text -->
					<div class="badges">
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
						</div><!--badges-->

					
				</article><!-- bio_article -->
			<?php endwhile; ?>				
			</section><!-- bio_spots -->
			

		</section><!-- main_section -->
		

<?php get_footer(); ?>

