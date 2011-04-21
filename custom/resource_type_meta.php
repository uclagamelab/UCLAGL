<div class="my_meta_control">
	<?php $mb->the_field('resource_type'); ?>
	<select name="<?php $mb->the_name(); ?>">
		<option value="">Select...</option>
		<option value="article"<?php $mb->the_select_state('article'); ?>>Article</option>
		<option value="interview"<?php $mb->the_select_state('interview'); ?>>Interview</option>
		<option value="lecture"<?php $mb->the_select_state('lecture'); ?>>Lecture</option>
		<option value="show"<?php $mb->the_select_state('show'); ?>>Show</option>
		<option value="workshop"<?php $mb->the_select_state('workshop'); ?>>Workshop</option>
		<option value="toolreview"<?php $mb->the_select_state('toolreview'); ?>>Tool Review</option>
		<option value="tutorial"<?php $mb->the_select_state('tutorial'); ?>>Tutorial</option>
	</select>

</div>