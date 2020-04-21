"""
Random episode generator.

Conor Rafferty <craffer@umich.edu>
"""

from setuptools import setup

setup(
    name="randepisode",
    version="0.1.0",
    packages=["randepisode"],
    include_package_data=True,
    install_requires=["tmdbsimple"],
    entry_points={"console_scripts": ["randepisode = randepisode.__main__:main"]},
)
