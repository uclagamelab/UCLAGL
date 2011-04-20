<?php get_header(); ?>

<section id="main_section">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<section id="post_main">
			<article id="post-<?php the_ID(); ?>">
				
				<?php
				echo('<div id="opening_image" >');
				the_post_thumbnail('slider'); 
				echo('</div>');
				?>
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
					

					<article id="game_footer_links" class="bio_article">
						<?
						// if there are links or attachments, set them up with striped colors
						$my_attachments = $attachments->the_meta();
						$my_links = $link_out->the_meta(); 
						if(sizeof($my_links['out_links']) > 0 || sizeof($my_attachments['docs']) > 0){ 
						
							echo "<h3>LINKS AND DOWNLOADS</h3>";
							
							$i=1;
		
							foreach($my_links['out_links'] as $link)
							{
			
								if($i%2==0)
								{
									echo "<div class=\"bio_badge yellow\">";
								}
								else
								{ 
									echo "<div class=\"bio_badge blue\">";	
								} 
								
								echo	"<a href=\"" . $link['link'] . "\"><p>" . $link['title'] . "</p></a>";
								echo "</div><!-- bio_links -->";
						
						 		$i++;
							} 
							
							foreach($my_attachments['docs'] as $download)
							{
								if($i%2==0)
								{
									echo "<div class=\"bio_badge yellow\">";
								}
								else
								{ 
									echo "<div class=\"bio_badge blue\">";	
								} 
								echo "<a href=\"" . $download['link'] . "\" ><p>" . $download['title'] . "</p></a>";
								echo "</div><!-- bio_links -->";
						 		$i++;
							}
						}
						?>
					</article><!-- game_footer_links -->
					<? 
					
					// figure out what kind of stuff needs to go into the meta box display
					$needsdate = $needscredit = $needsrequirements = false;
					$resource_type->the_field('resource_type');
					$my_resource_type = $resource_type->get_the_value();
					
					if($my_resource_type == "workshop" || $my_resource_type == "lecture" || $my_resource_type == "show")
					{
						$needsdate = true;
					}
					
					
					if($my_resource_type == "article" || $my_resource_type == "tutorial" || $my_resource_type == "toolreview" || $my_resource_type == "workshop")
					{
						$needscredit = true;
					}
					
					if($my_resource_type == "workshop" || $my_resource_type == "tutorial")
					{
						$needsrequirements = true;
					} 
					?>
					
					<section id="game_meta">
						<article id="datetime">
							<?php 
							
							if($needsdate)
							{
								$eventdate->the_field('startdate');
								//check if theres a date
								if($eventdate->get_the_value()){ 
									echo "<h3>WHEN</h3>";
									$ss = explode(" ", $eventdate->get_the_value());
									$eventdate->the_field('enddate');
									$es = explode(" ", $eventdate->get_the_value());
									if($ss[0] == $es[0]){
										if($ss[2]==$es[2]){
											$eventdate->the_value();
										}
										else
										{
											echo $ss[0] . " from " . $ss[2] . " to " . $es[2];
										}
									}
									else if($es[0])
									{
										echo "From " . $ss[0] . " to " . $es[0];
									}
									else
									{
										$eventdate->the_field('startdate');
										$eventdate->the_value();
									} 
								}
							}
							?>
							
						</article><!-- datetime -->
	
						<article id="requirements">
							<?php 
							$requirements->the_field('requirements');
							if($requirements->get_the_value() && $needsrequirements){ 
							//check if there are requirements
								echo "<h3>REQUIREMENTS</h3>";
								$requirements->the_field('requirements');
								$requirements->the_value();

							 } 
							?>
						</article><!-- requirements -->
						
						<article id="author_bio">
							<?php							
							
							if($game_credits->the_meta() && $needscredit)
							{
								echo "<h3>THIS RESOURCE CREATED BY</H3>";
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
							}
							?>
						</article> <!-- author_bio -->


					</section><!-- game_meta -->
					<hr/>
					
					<?php the_content(); ?>

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