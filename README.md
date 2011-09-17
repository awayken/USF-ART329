USF ART329
===============

Welcome to ART329 for the fall of 2011. This project includes all the course materials for this course that have been provided by the instructor.

This project uses web technologies like Apache Ant and Python to build files appropriate for distribution. See the How to Build section below for details.


Homepage
--------
Includes a basic index of the content in the rest of the site.

Welcome to ART 329 Web Design. This course is an introduction to the tools and techniques associated with building webpages and sites using professional-level software. Prerequisite: a grade of “C” or higher in ART 110 or ART 120. (3 s.h.).

Build: `ant homepage`


Syllabus
--------
Includes the standard info: course info, teaching info, grading info, university info, and course schedule.

Build: `ant syllabus`


Assignments
-----------
Provides detailed information on the assignments and the rubric for each assignment.

Build: `ant assignments`


Slides
------
As lecture slides get added, they'll show up in a list on the homepage. Slides are not part of the build script, but they are part of the deploy script.


How to Build
------------
This project uses Apache Ant to parse the static HTML files with some dynamic parsing and stitching. There are targets for the individual sections listed above. Additionally, there are targets: `clean`, `rebuild`, and `all` (which is the default).

Build: `ant` or `ant all` or `ant rebuild` to force a fresh version

The project also uses a small Python script for deployment. Deployment in this case is simply copying the distributable files to a target folder of your specification.

`./deploy.py ~/Dropbox/public/art329/` or `python deploy.py ~/Dropbox/public/art329/`
