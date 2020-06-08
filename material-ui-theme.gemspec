# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "material-ui-theme"
    spec.version       = "0.0.1"
    spec.authors       = ["Yang Jin Je"]
    spec.email         = ["yseiren87@gmail.com"]
  
    spec.summary       = "Material UI based Jekyll theme"
    spec.homepage      = "https://github.com/yseiren87/jekyllMaterialUITheme.git"
    spec.license       = "MIT"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }
  
    spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
  
    spec.add_development_dependency "bundler"
  end
  