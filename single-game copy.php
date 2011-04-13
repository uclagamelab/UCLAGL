<?php get_header(); ?>
<section id="main_section">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<section id="post_main">
			<article id="post-<?php the_ID(); ?>">


				<header>
					
					<h1><?php the_title(); ?></h1>
					

					
				</header>

					<section id="game_caption">
						<p>
						<?php 
							$short_description->the_field('description'); 
							$short_description->the_value();
						?>
						</p>
					</section><!-- game_caption -->
					<section id="game_meta">
						<article id="game_context">
							<h3>CONTEXT</h3>
							<?php
								$context->the_field('context');
								$context->the_value();
							?>
							<br/>Created <?php the_time('F jS, Y'); ?>
						</article><!-- game_context -->
						<article id="game_medium">
							<h3>MEDIUM</h3>
							<?php
								$medium->the_field('medium');
								$medium->the_value();
							?>
							
						</article><!-- game_medium -->
						<article id="game_credits">
							<h3>CREDITS</h3>
							<?php $game_credits->the_meta(); ?>
							<?php 
							while($game_credits->have_fields_and_multi('credits')): 
								 $game_credits->the_group_open(); 
								 $game_credits->the_field('person'); 
								 echo $game_credits->the_value(); 
							?>
							&nbsp;:&nbsp;
							<?php
								 $game_credits->the_field('roll'); 
								 echo $game_credits->the_value(); 
								 $game_credits->the_group_close(); 
							endwhile; 
							?>
						</article><!-- game_credits -->

					</section><!-- game_meta -->
					<?php
					echo('<div id="opening_image" >');
					the_post_thumbnail('slider'); 
					echo('</div>');
					?>
					<?php the_content('Read more on "'.the_title('', '', false).'" &raquo;'); ?>
					

			</article>

		</section>

	<?php endwhile; else: ?>

		<section>
			<article>
				<p>Sorry, no posts matched your criteria.</p>
			</article>
		</section>

	<?php endif; ?>

</section><!-- main_section -->

<?php get_footer(); ?>