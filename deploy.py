#! /usr/bin/env python

if __name__ == "__main__":
	import sys, os, shutil
	
	# Get the target folder
	target = sys.argv[1]
	
	print 'Building the project...'
	os.system('ant -q rebuild')
	
	# index.html
	print 'Copying index.html...'
	shutil.copyfile('index.html', target + '/index.html')
	
	# _styles
	print 'Copying the stylesheets...'
	shutil.rmtree(target + '_styles')
	shutil.copytree('_styles', target + '_styles')
	
	# _scripts
	print 'Copying the scripts...'
	shutil.rmtree(target + '_scripts')
	shutil.copytree('_scripts', target + '_scripts')
	
	# syllabus
	print 'Copying the syllabus...'
	shutil.rmtree(target + 'syllabus')
	shutil.copytree('syllabus_dist', target + 'syllabus')
	
	print 'Deployment complete!'