#! /usr/bin/env python

if __name__ == "__main__":
	import sys, os, shutil
	
	### Get the target folder
	target = sys.argv[1]
	
	# Build the project using Apache Ant
	print 'Building the project...'
	os.system('ant -q rebuild')
	
	
	# Stylesheets
	print 'Copying the stylesheets...'
	shutil.rmtree(target + '_styles')
	shutil.copytree('_styles', target + '_styles')
	
	# Scripts
	print 'Copying the scripts...'
	shutil.rmtree(target + '_scripts')
	shutil.copytree('_scripts', target + '_scripts')
	
	# Homepage
	print 'Copying homepage...'
	shutil.copyfile('homepage_dist/index.html', target + '/index.html')
	
	# Syllabus
	print 'Copying the syllabus...'
	shutil.rmtree(target + 'syllabus')
	shutil.copytree('syllabus_dist', target + 'syllabus')
	
	# Slides
	print 'Copying the slides...'
	shutil.rmtree(target + 'slides')
	shutil.copytree('slides', target + 'slides')
	
	### We're done!
	print 'Deployment complete!'
	